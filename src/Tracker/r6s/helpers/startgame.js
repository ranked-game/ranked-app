import uuid from 'uuid';
import { getGameData, updateGameData } from './index';

export const startgame = () => {
    const { matchId, gameMode } = getGameData();
    if (matchId !== '0' || !gameMode.includes('PVP')) return null;

    updateGameData({ matchId: uuid() });

    tracker.success('Sending startgame transaction...');
};

export const handleGameMode = (mode) => {
    if (mode.includes('PVP')) return startgame();
};
