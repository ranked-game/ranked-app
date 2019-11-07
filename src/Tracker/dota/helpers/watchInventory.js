import { updateGameData, getGameData } from './index';
import { debounce } from 'lodash';

let currentUserInventory = ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'];

/* LOCAL FUNCTIONS BLOCK */
const incrementWardsPlaced = debounce((wardWasPlaced = true) => {
    if (!wardWasPlaced) return null;

    updateGameData({
        wardsPlaced: ++getGameData().wardsPlaced,
    });
    return tracker.success('Ward placed');
}, 300);

const checkWardUsedAndUpdateInventory = (slot, item) => {
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
        return incrementWardsPlaced();
    }

    currentUserInventory[slot] = item;
    return incrementWardsPlaced(false);
};
/* END OF LOCAL FUNCTIONS BLOCK */

/* === EXPORTED BLOCK === */

/**
 * @returns {object} Returns last recorded user inventory state
 */
export const resetInventory = () => {
    const lastInventory = [...currentUserInventory];
    currentUserInventory = ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'];
    return lastInventory;
};

/**
 * @param {number} slot
 * @param {object} item
 */
export const updateInventory = (slot, item) => {
    const prevSlotItem = currentUserInventory[slot];
    const wards = ['item_ward_observer', 'item_ward_sentry'];

    if (prevSlotItem === 'item_ward_dispenser' && wards.includes(item)) {
        currentUserInventory[slot] = item;
        return incrementWardsPlaced();
    }

    return checkWardUsedAndUpdateInventory(slot, item);
};

/**
 * @param {number} slot
 * @param {object} item
 */
export const watchItemConsumed = (slot, item) => {
    if (item === 'empty') return null;

    return tracker.log('Item consuumed -> ', item);
};

/**
 *
 * @param {string} itemName
 */
export const watchItemUsed = (itemName) => {
    switch (itemName) {
        case 'item_ward_dispenser':
            tracker.log('Ward placed');
            incrementWardsPlaced();
            break;

        case 'item_ward_observer':
            tracker.log('Obs placed');
            incrementWardsPlaced();
            break;

        case 'item_ward_sentry':
            tracker.log('Sentry placed');
            incrementWardsPlaced();
            break;

        default:
            return tracker.log(`[ITEM] -> ${itemName}`);
    }

    return null;
};
