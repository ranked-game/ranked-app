/**
 *
 * @param {string} prevMultikill
 * @param {string} newMultikill
 */
export const countBestMultikill = (prevMultikill, newMultikill) => {
    const inputValues = [null, 'kill', 'double_kill', 'triple_kill', 'ultra_kill', 'rampage'];

    const outputValues = [null, 'Kill', 'Double Kill', 'Triple Kill', 'Ultra Kill', 'Rampage'];

    return outputValues[
        Math.max(inputValues.indexOf(prevMultikill), inputValues.indexOf(newMultikill))
    ];
};
