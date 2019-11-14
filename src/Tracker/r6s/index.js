import { updateGameData, getGameData, handleRosterUpdate, handleMatchId, endgame } from './helpers';

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
            tracker.log('matchOutcome -> ', data);
            updateGameData({ victory: data === 'victory' });
            return endgame();

        case 'roundStart':
            return null;

        case 'roundEnd':
            return null;

        case 'roundOutcome':
            return data === 'defeat'
                ? updateGameData({ roundsLost: ++getGameData().roundsLost })
                : updateGameData({ roundsWon: ++getGameData().roundsWon });

        case 'kill':
            return updateGameData({ kills: ++getGameData().kills });

        case 'headshot':
            return updateGameData({ headshots: ++getGameData().headshots });

        case 'knockedout':
            return updateGameData({ knockouts: ++getGameData().knockouts });

        case 'death':
            return updateGameData({ deaths: ++getGameData().deaths });

        case 'killer':
            let { playerName, suicides } = getGameData();

            return data === playerName ? updateGameData({ suicides: ++suicides }) : null;

        default:
            return null;
    }
};

const onInfoUpdates = ({ feature, info }) => {
    switch (feature) {
        case 'game_info':
            return null;

        case 'match':
            const { match } = info;
            return match ? updateGameData({ teamScore: JSON.parse(match.score) }) : null;

        case 'match_info':
            const {
                match_info: { game_mode, pseudo_match_id },
            } = info;

            return game_mode
                ? updateGameData({ gameMode: game_mode })
                : handleMatchId(pseudo_match_id); // this kicks off startgame transaction

        case 'roster':
            const type = Object.keys(info)[0];

            return type === 'players'
                ? handleRosterUpdate(info.players)
                : updateGameData({ score: +info.player.score || getGameData().score });

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
