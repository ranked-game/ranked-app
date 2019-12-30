// Config
import { MAIN_URL } from './config';
import shitEncrypt from './shitEncrypt';

export const Api = {
    account: {
        /**
         * @returns {Object} account data
         */
        getAccountData: () =>
            shitEncrypt({
                method: 'GET',
                endpoint: `${MAIN_URL}/account/me`,
            }),

        getMatchHistory: () =>
            shitEncrypt({
                method: 'GET',
                endpoint: `${MAIN_URL}/games/history?page=1&limit=20`,
            }),
    },

    games: {
        /**
         * @param {Object} gameData
         * @param {String} gameData.gameId string
         * @param {String} gameData.matchId string
         * @param {Object} gameData.party object
         */
        sendStartgameTransaction: (gameData) =>
            shitEncrypt({
                endpoint: `${MAIN_URL}/games/start`,
                method: 'POST',
                body: gameData,
            }),

        /**
         * @param {Object} gameData
         * @param {String} gameData.gameId string
         * @param {String} gameData.matchId string
         * @param {Object} gameData.matchData object
         */
        sendEndgameTransaction: (gameData) =>
            shitEncrypt({
                endpoint: `${MAIN_URL}/games/end`,
                method: 'POST',
                body: gameData,
            }),
    },
};
