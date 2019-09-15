import { debounce } from 'lodash';

let currentUserInventory = ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'];

/* LOCAL FUNCTIONS BLOCK */
const incrementWardsPlaced = debounce((wardWasPlaced, gameDataReference) => {
    if (!wardWasPlaced) return null;

    gameDataReference.wardsPlaced++;
    return tracker.success('Ward placed');
}, 300);

const checkWardUsedAndUpdateInventory = (slot, item, gameDataReference) => {
    const wards = ['item_ward_observer', 'item_ward_sentry'];
    const prevSlotItem = currentUserInventory[slot];

    if (item === 'empty' && wards.includes(prevSlotItem)) {
        const multipleWards =
            currentUserInventory.filter((item) => wards.includes(item)).length > 1;
        if (multipleWards) {
            currentUserInventory[slot] = item;
            return null;
        }

        currentUserInventory[slot] = item;
        return incrementWardsPlaced(true, gameDataReference);
    }

    currentUserInventory[slot] = item;
    return incrementWardsPlaced(false);
};
/* END OF LOCAL FUNCTIONS BLOCK */

/* === EXPORTED BLOCK === */

export const resetInventory = () => {
    currentUserInventory = ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'];
    return true;
};

/**
 * @param {number} slot
 * @param {object} item
 * @param {object} gameDataReference - ref to gameData object
 */
export const updateInventory = (slot, item, gameDataReference) => {
    const prevSlotItem = currentUserInventory[slot];
    const wards = ['item_ward_observer', 'item_ward_sentry'];

    if (prevSlotItem === 'item_ward_dispenser' && wards.includes(item)) {
        return incrementWardsPlaced(true, gameDataReference);
    }

    return checkWardUsedAndUpdateInventory(slot, item, gameDataReference);
};

/**
 * @param {number} slot
 * @param {object} item
 * @param {object} gameDataReference - ref to gameData object
 */
export const itemConsumed = (slot, item) => {
    if (item === 'empty') return null;

    return tracker.log('Item consuumed -> ', item);
};
