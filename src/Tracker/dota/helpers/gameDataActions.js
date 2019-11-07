let gameData = {
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

/**
 * @returns {Object} Returns gameData obj
 */
export const getGameData = () => gameData;

/**
 * @param {Object} newData Object with data to update
 * @param newData.bots Boolean
 * @param newData.customMode Boolean
 * @param newData.roster Object with `dire` and `radiant` arrays
 * @param newData.roster.dire Array of player objects
 * @param newData.roster.radiant Array of player objects
 * @param newData.kills Number
 * @param newData.deaths Number
 * @param newData.assists Number
 * @param newData.lastHits Number
 * @param newData.denies Number
 * @param newData.wardsPlaced Number
 * @param newData.smokesUsed Number
 * @param newData.maximumKillStreak Number
 * @param newData.bestMultikill String with name of multikill
 * @param newData.multikillsAmount Number
 * @param newData.playerTeam String - "radiant" or "dire"
 * @param newData.playerSteamId String
 * @param newData.playerHero String
 * @param newData.skillBuild Array
 * @param newData.playerInventory Array
 * @param newData.matchId String
 * @param newData.victory Boolean
 * @param newData.party Array of player objects
 */
export const updateGameData = (newData) => {
    gameData = { ...gameData, ...newData };
};

export const clearGameData = () => {
    tracker.log('Resetting gameData...');

    gameData = {
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
