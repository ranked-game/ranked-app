import { updateGameData } from './index';

export const handleRosterUpdate = (roster) => {
    const json = Object.values(roster)[0];
    if (!json) return null;

    const { is_local, name, team } = JSON.parse(json);

    if (is_local) {
        tracker.log('Player name -> ', name);
        tracker.log('Player team -> ', team);

        return updateGameData({ playerName: name, playerTeam: team });
    }

    return null;
};
