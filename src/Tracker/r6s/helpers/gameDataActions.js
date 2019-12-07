let gameData = {
    kills: 0,
    deaths: 0,
    headshots: 0,
    score: 0,
    suicides: 0,
    knockouts: 0,

    roundsWon: 0,
    roundsLost: 0,

    playerTeam: '',
    teamScore: {
        orange: 0,
        blue: 0,
    },

    matchId: '0',
    gameMode: '',
    victory: null,
    playerName: '',
};

/**
 * @returns {Object} Returns gameData obj
 */
export const getGameData = () => gameData;

/**
 * @param {Object} newData Object with data to update
 */
export const updateGameData = (newData) => {
    gameData = { ...gameData, ...newData };
};

export const updatePlayerData = (data) => {
    // const key = Object.keys(data)[0];

    // switch (key) {
    // }
    return data;
};

export const clearGameData = () => {
    tracker.log('Resetting gameData...');

    gameData = {
        kills: 0,
        deaths: 0,
        headshots: 0,
        score: 0,
        suicides: 0,
        knockouts: 0,

        roundsWon: 0,
        roundsLost: 0,

        playerTeam: '',
        teamScore: {
            orange: 0,
            blue: 0,
        },

        matchId: '0',
        gameMode: '',
        victory: null,
        playerName: '',
    };
};
