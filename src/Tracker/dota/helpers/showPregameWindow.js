import { getGameData } from './index';

export const showPregameWindow = () => {
    if (getGameData().customMode) return tracker.warning('Showing custom game pre-game screen');

    if (getGameData().bots) return tracker.warning('Showing game with bots pre-game screen');

    return tracker.success('Showing pre-game screen');
};
