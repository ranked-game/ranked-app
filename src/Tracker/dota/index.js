import {
    countBestMultikill,
    watchItemUsed,
    updateInventory,
    resetInventory,
    watchItemConsumed,
    clearGameData,
    updateGameData,
    handleRosterUpdate,
    endgame,
} from './helpers';

const features = [
    'game_state_changed',
    'match_state_changed',
    'match_ended',
    'kill',
    'assist',
    'death',
    'cs',
    'hero_boughtback',
    'hero_health_mana_info',
    'hero_status_effect_changed',
    'hero_ability_skilled',
    'hero_ability_used',
    'hero_item_changed',
    'hero_item_used',
    'hero_item_consumed',
    'match_info',
    'roster',
    'party',
];

export let gameData = {
    bots: false,
    customMode: false,

    roster: {
        radiant: [],
        dire: [],
    },

    kills: 0,
    deaths: 0,
    assists: 0,

    lastHits: 0,
    denies: 0,

    wardsPlaced: 0,
    smokesUsed: 0,

    maximumKillStreak: 0,
    bestMultikill: null,
    multikillsAmount: 0,

    playerTeam: null,
    playerSteamId: null,
    playerHero: null,
    skillBuild: [],
    playerInventory: [],

    matchId: null,
    victory: null,
    party: null,
};

const setFeatures = () => {
    overwolf.games.events.setRequiredFeatures(features, ({ status }) =>
        status === 'error' ? setTimeout(setFeatures, 2000) : tracker.log('Dota 2 features set'),
    );
};

const onNewEvents = ({ events }) => {
    const { name, data: jsonData } = events[0];
    const data = JSON.parse(jsonData);

    switch (name) {
        case 'match_state_changed':
            const { match_state: matchState } = data;

            switch (matchState) {
                case 'DOTA_GAMERULES_STATE_STRATEGY_TIME':
                    //! add a helper for pre-game screen
                    if (gameData.customMode)
                        return tracker.warning('Showing custom game pre-game screen');

                    if (gameData.bots)
                        return tracker.warning('Showing game with bots pre-game screen');

                    return tracker.success('Showing pre-game screen');

                case 'DOTA_GAMERULES_STATE_GAME_IN_PROGRESS':
                    if (gameData.customMode || gameData.bots) return null;

                    return tracker.success('Sending startgame transaction....');

                default:
                    return null;
            }

        case 'game_state_changed':
            const { match_state, match_id, player_steam_id, player_team } = data;

            switch (match_state) {
                case 'DOTA_GAMERULES_STATE_CUSTOM_GAME_SETUP':
                    gameData = clearGameData();
                    gameData = updateGameData({ customMode: true });
                    return tracker.warning('Custom game');

                case 'DOTA_GAMERULES_STATE_INIT':
                    gameData = updateGameData({
                        matchId: match_id,
                        playerSteamId: player_steam_id,
                        playerTeam: player_team,
                    });

                    return tracker.log("ID's set");

                case 'DOTA_GAMERULES_STATE_WAIT_FOR_PLAYERS_TO_LOAD':
                    gameData = clearGameData();
                    gameData = updateGameData({
                        matchId: match_id,
                        playerSteamId: player_steam_id,
                        playerTeam: player_team,
                    });

                    return tracker.log("ID's set");

                default:
                    return null;
            }

        case 'match_ended':
            const { winner } = data;

            overwolf.games.events.getInfo(({ res }) => {
                const {
                    party,
                    roster: { players },
                    me: { steam_id },
                } = res;

                gameData = updateGameData({
                    victory: winner === gameData.playerTeam,
                    playerInventory: resetInventory(),
                    party: party ? JSON.parse(party.party) : null,
                    playerSteamId: steam_id,
                });

                gameData = updateGameData(handleRosterUpdate(JSON.parse(players)));

                endgame(gameData);
                gameData = clearGameData();
            });

            break;

        case 'cs':
            const { last_hits: lastHits, denies } = data;
            gameData = updateGameData({ lastHits, denies });

            break;

        case 'kill':
            const { kills, kill_streak, label } = data;
            const { bestMultikill, maximumKillStreak, multikillsAmount } = gameData;
            gameData = updateGameData({
                maximumKillStreak: Math.max(kill_streak, maximumKillStreak),
                bestMultikill: countBestMultikill(bestMultikill, label),
                multikillsAmount: label === 'kill' ? multikillsAmount : multikillsAmount + 1,
                kills,
            });
            break;

        case 'death':
            const { deaths } = data;
            gameData = updateGameData({ deaths });
            break;

        case 'assist':
            const { assists } = data;
            gameData = updateGameData({ assists });
            break;

        case 'hero_ability_skilled':
            const { name: skill } = data;

            gameData = updateGameData({
                skillBuild: [...gameData.skillBuild, skill],
            });
            break;

        case 'hero_ability_used':
            break;

        case 'hero_health_mana_info':
            break;

        case 'hero_item_changed':
            const { slot: itemSlot, name: changedItemName, location } = data;

            if (location === 'hero') {
                updateInventory(itemSlot, changedItemName, gameData);
            }
            break;

        case 'hero_item_consumed':
            const { slot: consumedSlot, name: consumedName } = data;
            watchItemConsumed(consumedSlot, consumedName, gameData);
            break;

        case 'hero_item_used':
            const { name: itemName } = data;
            watchItemUsed(itemName, gameData);
            break;

        case 'hero_status_effect_changed':
            break;

        default:
            // return tracker.log(`[ON_NEW_EVENTS] [DOTA_2] -> [${name}] -> `, data);
            return null;
    }

    return null;
};

const onInfoUpdates = (data) => {
    const { info, feature } = data;

    switch (feature) {
        case 'roster':
            const roster = JSON.parse(info.roster.players);

            gameData = updateGameData(handleRosterUpdate(roster));
            break;

        case 'party':
            const party = JSON.stringify(info.party.party);
            gameData = updateGameData({ party });

            return tracker.log('party -> ', data);

        default:
            return null;
    }

    return null;
};

export const setDotaListener = () => {
    setFeatures();
    overwolf.games.events.onInfoUpdates2.addListener(onInfoUpdates);
    overwolf.games.events.onNewEvents.addListener(onNewEvents);

    return tracker.log('Dota 2 listeners set');
};

export const removeDotaListener = () => {
    overwolf.games.events.onInfoUpdates2.removeListener(onInfoUpdates);
    overwolf.games.events.onNewEvents.removeListener(onNewEvents);

    return tracker.log('Dota listeners removed');
};
