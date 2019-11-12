import { Api } from '../../../REST';
import { getGameData } from './index';

export const startgame = async () => {
    const {
        customMode,
        bots,
        roster: { dire, radiant },
        party,
        matchId,
    } = getGameData();

    if (customMode || bots || dire.length < 1 || radiant.length < 1) return null;

    tracker.success('Sending startgame transaction....');
    const response = await Api.games.sendStartgameTransaction({ gameId: '7314', matchId, party });
    const result = await response.json();

    if (response.status > 204)
        return tracker.error('Startgame transaction error -> \n', JSON.stringify(result, null, 2));

    return tracker.log('Startgame transaction result -> ', result);
};
