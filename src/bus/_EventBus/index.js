import uuid from 'uuid/v4';

export default function() {
    let _listeners = [];

    const _types = {
        ENDGAME: 'ENDGAME',
        STARTGAME: 'STARTGAME',
        WINDOW_READY: 'WINDOW_READY',
        UPDATE_BALANCE: 'UPDATE_BALANCE',
        SHOW_IRONRV_AD: 'SHOW_IRONRV_AD',
    };

    //  adding new listener + returning an id to be able to remove listener
    //  listener => function that is called every time event is fired
    function addListener(type, handler) {
        const id = uuid();
        _listeners.push({ type, handler, id });
        return id;
    }

    //  id is returned when setting listener
    function removeListener(id) {
        _listeners = _listeners.filter((item) => item.id !== id);
    }

    //  receiving event type and firing only events with matched types
    //  to avoid firing all the events on every `fire` call
    // 
    //  eventData => arguments that are passed to the callback fn
    function fire(type, eventData) {
        const filtered = _listeners.filter((item) => item.type === type);
        filtered.forEach(({ handler }) => handler(eventData));
    }

    return {
        addListener,
        removeListener,
        fire,
        types: _types,
    };
}
