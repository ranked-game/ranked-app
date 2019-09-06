const features = [
    'game_state_changed',
    'match_state_changed',
    'match_ended',
    'kill',
    'assist',
    'death',
    'cs',
    'hero_boughtback',
    'hero_health_mana_info',
    'hero_status_effect_changed',
    'hero_ability_skilled',
    'hero_ability_used',
    'hero_item_changed',
    'hero_item_used',
    'hero_item_consumed',
    'match_info',
    'roster',
    'party',
];

const setFeatures = () => {
    overwolf.games.events.setRequiredFeatures(features, ({ status }) =>
        status === 'error' ? setTimeout(setFeatures, 2000) : tracker.log('Dota 2 features set'),
    );
};

const onNewEvents = ({ events }) => {
    const { name, data: jsonData } = events[0];
    const data = JSON.parse(jsonData);

    return tracker.log(`[ON_NEW_EVENTS] [DOTA_2] -> [${name}] -> `, data);

    /**
     * 1) Inventory actions (Check out wards!)
     */
};

const onInfoUpdates = (data) => {
    return data;
    // return tracker.log('onInfoUpdates from Dota 2 -> ', data);
};

export const setDotaListener = () => {
    setFeatures();
    overwolf.games.events.onInfoUpdates2.addListener(onInfoUpdates);
    overwolf.games.events.onNewEvents.addListener(onNewEvents);

    return tracker.log('Dota 2 listeners set');
};

export const removeDotaListener = () => {
    overwolf.games.events.onInfoUpdates2.removeListener(onInfoUpdates);
    overwolf.games.events.onNewEvents.removeListener(onNewEvents);

    return tracker.log('Dota listeners removed');
};
