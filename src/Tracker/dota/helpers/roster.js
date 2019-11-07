import { debounce } from 'lodash';
import { getGameData, updateGameData } from './index';

/**
 * @returns {boolean}
 */
export const checkBots = (roster) => {
    const bots = roster.filter((item) => item.steamId.startsWith('9007199'));

    return updateGameData({
        bots: bots.length > 0,
    });
};

/**
 * @param {Object} roster - Receiving `roster` object as a param
 */
export const handleRosterUpdate = debounce((roster) => {
    const radiant = roster.filter((item) => item.team === 2);
    const dire = roster.filter((item) => item.team === 3);

    if (roster.length !== 10) return {};
    if (!getGameData().playerSteamId) return {};

    const playerData = roster.filter((item) => item.steamId === getGameData().playerSteamId)[0];

    updateGameData({
        roster: { radiant, dire },
        playerHero: playerData.hero,
    });
    checkBots(roster);

    return null;
}, 5000);
