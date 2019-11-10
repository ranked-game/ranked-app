import { getGameData, clearGameData } from './index';

export const endgame = () => {
    tracker.success('Sending endgame transaction...');
    tracker.log(getGameData());
    clearGameData();
};
