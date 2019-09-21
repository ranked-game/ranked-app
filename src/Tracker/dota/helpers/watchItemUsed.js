/**
 *
 * @param {string} itemName
 * @param {object} gameDataReference - ref to gameData object
 */
export const watchItemUsed = (itemName, gameDataReference) => {
    switch (itemName) {
        case 'item_ward_dispenser':
            tracker.log('Ward placed');
            gameDataReference.wardsPlaced++;
            break;

        case 'item_ward_observer':
            tracker.log('Obs placed');
            gameDataReference.wardsPlaced++;
            break;

        case 'item_ward_sentry':
            tracker.log('Sentry placed');
            gameDataReference.wardsPlaced++;
            break;

        default:
            return tracker.log(`[ITEM] -> ${itemName}`);
    }

    return null;
};
