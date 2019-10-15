// Core
import { Map } from 'immutable';

// Types
import { types } from './types';

const initialState = Map({
    leftSide: 'AccountSummary',
    rightSide: 'Profile',

    leftSideProps: {},
    rightSideProps: {},
});

export const uiReducer = (state = initialState, { type, payload = {} }) => {
    const { component, props } = payload;

    switch (type) {
        case types.FILL_LEFT_SIDE:
            if (!props) return state.set('leftSide', component);
            if (!component) return state.set('leftSideProps', props);

            return state.set('leftSide', component).set('leftSideProps', props);

        case types.FILL_RIGHT_SIDE:
            if (!props) return state.set('rightSide', component);
            if (!component) return state.set('rightSideProps', props);

            return state.set('rightSide', component).set('rightSideProps', props);

        default:
            return state;
    }
};
