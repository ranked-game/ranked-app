import { getGameData } from './index';

export const startgame = () => {
    const {
        customMode,
        bots,
        roster: { dire, radiant },
    } = getGameData();

    if (customMode || bots || dire.length < 1 || radiant.length < 1) return null;

    return tracker.success('Sending startgame transaction....');
};
