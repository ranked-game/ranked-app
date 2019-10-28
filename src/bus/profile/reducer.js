// Core
import { Map, fromJS } from 'immutable';

// Types
import { types } from './types';

import image from '../../theme/assets/svg/logoShortOriginal.svg';

const initialState = Map({
    lastGame: Map({
        assists: 0,
        deaths: 0,
        direImages: [image, image, image, image, image],
        kills: 0,
        playerHeroImage: image,
        radiantImages: [image, image, image, image, image],
        victory: true,
    }),
});

export const profileReducer = (state = initialState, { type, payload = {} }) => {
    switch (type) {
        case types.FILL_LAST_GAME:
            return state.set('lastGame', fromJS(payload));

        default:
            return state;
    }
};
