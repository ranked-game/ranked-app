import { gameData } from '..';

export const clearGameData = () => {
    gameData = {
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
        itemsUsed: [],

        matchId: null,
        playerTeam: null,
        victory: null,
        party: null,
    };

    tracker.log('gameData reset');
};

/**
 *
 * @param {object} newData
 */
export const updateGameData = (newData) => {
    gameData = {
        ...gameData,
        ...newData,
    };
};
