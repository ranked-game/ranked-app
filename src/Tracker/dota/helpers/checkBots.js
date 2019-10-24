import { gameData } from '..';

export const checkBots = () => {
    const {
        roster: { radiant, dire },
    } = gameData;
    const bots = [...radiant, ...dire].filter((item) => item.steamId.startsWith('9007199'));

    return bots.length > 0;
};
