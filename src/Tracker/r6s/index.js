const features = ['game_info', 'match', 'match_info', 'roster', 'kill', 'death'];

// let matchData = {
//     gameId: '10826',
// };

const setFeatures = () => {
    overwolf.games.events.setRequiredFeatures(
        features,
        ({ status }) => status === 'error' && setTimeout(setFeatures, 2000),
    );
};

const onNewEvents = (data) => {
    tracker.log('OnNewEvents -> ', data);
};

const onInfoUpdates = (data) => {
    tracker.log('OnInfoUpdates -> ', data);
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
