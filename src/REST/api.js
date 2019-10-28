// Config
// import { MAIN_URL } from './config';

// Test
// import { heroes } from '../utils/dotaHeroes';
import Dota2API from 'dota2-web-api';
const dota2Api = new Dota2API('3A1B5FE4C6F1BAC35AB4F597B14770DC', 'en_us');

export const Api = {
    profile: {
        fetchLastGameAsync: () => {
            const {
                kills,
                deaths,
                assists,
                playerHero,
                victory,
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
            };
        },
    },
};
