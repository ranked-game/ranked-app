import validate from 'uuid-validate';
import { Api } from '../../../REST';
import { getGameData, updateGameData } from './index';

export const startgame = async () => {
    const { matchId, gameMode } = getGameData();
    if (!gameMode.includes('PVP') || !validate(matchId)) return null;

    tracker.success('Sending startgame transaction...');
    const response = await Api.games.sendStartgameTransaction({
        gameId: '10826',
        matchId,
        party: {},
    });
    const result = await response.json();

    if (response.status > 204)
        return tracker.error('Startgame transaction error -> \n', JSON.stringify(result, null, 2));

    return tracker.log('Startgame transaction result -> ', result);
};

export const handleMatchId = (matchId) => {
    tracker.log("Match id's set");
    updateGameData({ matchId });
    return startgame();
};
