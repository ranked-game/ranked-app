// Core
import { Map } from 'immutable';

// Types
import { types } from './types';

const initialState = Map({
    leftSide: 'AccountSummary',
    rightSide: 'Tourneys',
});

export const uiReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.FILL_LEFT_SIDE:
            return state.set('leftSide', payload);

        case types.FILL_RIGHT_SIDE:
            return state.set('rightSide', payload);

        default:
            return state;
    }
};
