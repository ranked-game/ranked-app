import { updateGameData } from './index';

export const handleRosterUpdate = (roster) => {
    const json = Object.values(roster)[0];
    const { is_local, name, team } = JSON.stringify(data);

    if (is_local) return updateGameData({ playerName: name, playerTeam: team });
};
