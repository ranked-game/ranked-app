// Config
import { MAIN_URL } from './config';
import shitEncrypt from './shitEncrypt';

// Test
// import { heroes } from '../utils/dotaHeroes';
import Dota2API from 'dota2-web-api';
const dota2Api = new Dota2API('3A1B5FE4C6F1BAC35AB4F597B14770DC', 'en_us');

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

        fetchLastGameAsync: () => {
            const {
                kills,
                deaths,
                assists,
                playerHero,
                victory,
                matchId,
                roster: { radiant, dire },
            } = JSON.parse(sessionStorage.getItem('gameData'));
            const playerHeroImage = dota2Api.getHeroImage(playerHero, 'vert.jpg');
            const direImages = dire.map(({ hero }) => dota2Api.getHeroImage(hero, 'vert.jpg'));
            const radiantImages = radiant.map(({ hero }) =>
                dota2Api.getHeroImage(hero, 'vert.jpg'),
            );

            return {
                kills,
                deaths,
                assists,
                playerHeroImage,
                direImages,
                radiantImages,
                victory,
                matchId,
            };
        },
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
