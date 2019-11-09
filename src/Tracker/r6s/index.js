import { updateGameData, getGameData } from './helpers';

const features = ['game_info', 'match', 'match_info', 'roster', 'kill', 'death'];

const setFeatures = () => {
    overwolf.games.events.setRequiredFeatures(
        features,
        ({ status }) => status === 'error' && setTimeout(setFeatures, 2000),
    );
};

const onNewEvents = ({ events }) => {
    const { name, data } = events[0];

    switch (name) {
        case 'matchOutcome':
            return updateGameData({ victory: data === 'victory' });

        case 'roundStart':
            return null;

        case 'roundEnd':
            return null;

        case 'roundOutcome':
            return data
                ? updateGameData({ roundsWon: ++getGameData().roundsWon })
                : updateGameData({ roundsLost: ++getGameData().roundsLost });

        case 'kill':
            return null;

        case 'headshot':
            return updateGameData({ headshots: ++getGameData().headshots });

        case 'knockedout':
            return updateGameData({ knockouts: ++getGameData().knockouts });

        case 'death':
            return null;

        case 'killer':
            const { playerName, suicides } = getGameData();

            return data === playerName ? updateGameData({ suicides: suicides + 1 }) : null;

        default:
            return null;
    }
};

const onInfoUpdates = ({ feature, info }) => {
    switch (feature) {
        case 'game_info':
            return null;

        case 'match':
            return null;

        case 'match_info':
            const {
                match_info: { game_mode, pseudo_match_id },
            } = info;

            if (game_mode) return updateGameData({ gameMode: game_mode });

            return updateGameData({ matchId: pseudo_match_id });

        case 'roster':
            const type = Object.keys(info)[0];

            if (type === 'players') return tracker.log('Roster data -> ', info.players);

            return tracker.log('Player data -> ', info.player);

        default:
            return tracker.log(`onInfoUpdates from RS6 ->`, feature, info);
    }
};

export const setR6SiegeListener = () => {
    setFeatures();
    overwolf.games.events.onInfoUpdates2.addListener(onInfoUpdates);
    overwolf.games.events.onNewEvents.addListener(onNewEvents);

    return tracker.log('R6Siege listeners set');
};

export const removeR6SiegeListener = () => {
    overwolf.games.events.onInfoUpdates2.removeListener(onInfoUpdates);
    overwolf.games.events.onNewEvents.removeListener(onNewEvents);

    return tracker.log('R6Siege listeners removed');
};
