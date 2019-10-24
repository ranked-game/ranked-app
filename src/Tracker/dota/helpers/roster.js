import { debounce } from 'lodash';
import { gameData } from '..';

/**
 * @returns {boolean}
 */
export const checkBots = () => {
    const {
        roster: { radiant, dire },
    } = gameData;
    const bots = [...radiant, ...dire].filter((item) => item.steamId.startsWith('9007199'));

    return bots.length > 0;
};

/**
 * @param {Object} roster - Receiving `roster` object as a param
 * @returns {Object} Either object to update `gameData` or empty obj
 */
export const handleRosterUpdate = debounce((roster) => {
    const radiant = roster.filter((item) => item.team === 2);
    const dire = roster.filter((item) => item.team === 3);

    if (roster.length !== 10) return {};
    if (!gameData.playerSteamId) return {};

    const playerData = roster.filter((item) => item.steamId === gameData.playerSteamId)[0];

    return {
        roster: { radiant, dire },
        bots: checkBots(),
        playerHero: playerData.hero,
    };
}, 5000);
