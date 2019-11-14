import { Api } from '../../../REST';
import { getGameData, clearGameData } from './index';

export const endgame = async () => {
    const {
        customMode,
        bots,
        matchId,
        roster: { radiant, dire },
    } = getGameData();

    if (customMode || bots || dire.length < 1 || radiant.length < 1) return null;

    tracker.success('Sending endgame transaction...');
    tracker.log(getGameData());

    const response = await Api.games.sendEndgameTransaction({
        gameId: '7314',
        matchData: getGameData(),
        matchId,
    });
    const result = await response.json();

    if (response.status > 204) return tracker.error('Endgame transaction error -> ', result);

    tracker.log('Endgame transaction result -> ', result);

    return clearGameData();
};
