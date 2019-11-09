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
    startgame,
    getGameData,
    showPregameWindow,
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
                    return showPregameWindow();

                case 'DOTA_GAMERULES_STATE_GAME_IN_PROGRESS':
                    return startgame();

                default:
                    return null;
            }

        case 'game_state_changed':
            const { match_state, match_id, player_steam_id, player_team } = data;

            switch (match_state) {
                case 'DOTA_GAMERULES_STATE_CUSTOM_GAME_SETUP':
                    clearGameData();
                    updateGameData({ customMode: true });
                    return tracker.warning('Custom game');

                case 'DOTA_GAMERULES_STATE_INIT':
                    updateGameData({
                        matchId: match_id,
                        playerSteamId: player_steam_id,
                        playerTeam: player_team,
                    });

                    return tracker.log("ID's set");

                case 'DOTA_GAMERULES_STATE_WAIT_FOR_PLAYERS_TO_LOAD':
                    clearGameData();
                    updateGameData({
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

                handleRosterUpdate(JSON.parse(players));
                updateGameData({
                    victory: winner === getGameData().playerTeam,
                    playerInventory: resetInventory(),
                    party: party ? JSON.parse(party.party) : null,
                    playerSteamId: steam_id,
                });

                endgame();
            });

            break;

        case 'cs':
            const { last_hits: lastHits, denies } = data;
            updateGameData({ lastHits, denies });

            break;

        case 'kill':
            const { kills, kill_streak, label } = data;
            const { bestMultikill, maximumKillStreak, multikillsAmount } = getGameData();
            updateGameData({
                maximumKillStreak: Math.max(kill_streak, maximumKillStreak),
                bestMultikill: countBestMultikill(bestMultikill, label),
                multikillsAmount: label === 'kill' ? multikillsAmount : multikillsAmount + 1,
                kills,
            });
            break;

        case 'death':
            const { deaths } = data;
            updateGameData({ deaths });
            break;

        case 'assist':
            const { assists } = data;
            updateGameData({ assists });
            break;

        case 'hero_ability_skilled':
            const { name: skill } = data;

            updateGameData({
                skillBuild: [...getGameData().skillBuild, skill],
            });
            break;

        case 'hero_ability_used':
            break;

        case 'hero_health_mana_info':
            break;

        case 'hero_item_changed':
            const { slot: itemSlot, name: changedItemName, location } = data;

            if (location === 'hero') {
                updateInventory(itemSlot, changedItemName);
            }
            break;

        case 'hero_item_consumed':
            const { slot: consumedSlot, name: consumedName } = data;
            watchItemConsumed(consumedSlot, consumedName);
            break;

        case 'hero_item_used':
            const { name: itemName } = data;
            watchItemUsed(itemName);
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
            if (!info.roster.players) return null;
            const roster = JSON.parse(info.roster.players);

            handleRosterUpdate(roster);
            break;

        case 'party':
            const party = JSON.stringify(info.party.party);
            updateGameData({ party });

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
