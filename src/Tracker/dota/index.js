import {
    countBestMultikill,
    watchItemUsed,
    updateInventory,
    resetInventory,
    itemConsumed,
    clearGameData,
    updateGameData,
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

/*
    Startgame obj:

    const startGameData = {
        gameId: '123123',
        matchId: null,
        party: null,
    }
*/

export let gameData = {
    bots: false,
    customMode: false,

    kills: 0,
    deaths: 0,
    assists: 0,

    xpm: 0,
    gpm: 0,

    lastHits: 0,
    denies: 0,

    wardsPlaced: 0,
    smokesUsed: 0,

    maximumKillStreak: 0,
    bestMultikill: null,
    multikillsAmount: 0,
    skillBuild: [],

    matchId: null,
    playerTeam: null,
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
                    if (gameData.customMode)
                        return tracker.warning('Showing custom game pre-game screen');
                    tracker.success('Showing pre-game screen');
                    break;

                case 'DOTA_GAMERULES_STATE_GAME_IN_PROGRESS':
                    if (gameData.customMode) return null;
                    tracker.success('Sending startgame transaction....');
                    break;

                default:
                    // return tracker.log(`[MATCH_STATE_CHANGED] -> `, matchState);
                    return null;
            }

            break;

        case 'game_state_changed':
            const { match_state } = data;

            if (match_state === 'DOTA_GAMERULES_STATE_CUSTOM_GAME_SETUP') {
                tracker.warning('Custom game');
                updateGameData({ customMode: true });
            }

            break;

        case 'match_ended':
            tracker.log('Dota 2 -> match_ended -> getInfo data');
            overwolf.games.events.getInfo((data) => tracker.log(data));
            tracker.log(gameData);

            clearGameData(gameData);
            resetInventory();
            break;

        case 'cs':
            const { last_hits: lastHits, denies } = data;
            updateGameData({ lastHits, denies });

            break;

        case 'kill':
            const { kills, kill_streak, label } = data;
            const { bestMultikill, maximumKillStreak, multikillsAmount } = gameData;
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

        case 'hero_ability_skilled':
            const { name: skill } = data;
            updateGameData({
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
            itemConsumed(consumedSlot, consumedName, gameData);
            break;

        case 'hero_item_used':
            const { name: itemName } = data;
            watchItemUsed(itemName, gameData);
            break;

        case 'hero_status_effect_changed':
            break;

        default:
            return tracker.log(`[ON_NEW_EVENTS] [DOTA_2] -> [${name}] -> `, data);
    }

    /**
     * 1) Inventory actions (Check out wards!)
     */

    return null;
};

const onInfoUpdates = (data) => {
    return data;
    // return tracker.log('onInfoUpdates from Dota 2 -> ', data);
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
