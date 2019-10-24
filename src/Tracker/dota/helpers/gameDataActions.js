import { gameData } from '..';

/**
 * @returns {Object} Initial gameData object
 */
export const clearGameData = () => {
    tracker.log('Resetting gameData...');

    return {
        bots: false,
        customMode: false,

        roster: {
            radiant: [],
            dire: [],
        },

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

        playerTeam: null,
        playerSteamId: null,
        playerHero: null,
        skillBuild: [],
        playerInventory: [],

        matchId: null,
        victory: null,
        party: null,
    };
};

/**
 * @param {Object} newData Object with data to update
 * @returns {Object} Returns updated gameData object
 */
export const updateGameData = (newData) => {
    return { ...gameData, ...newData };
};
