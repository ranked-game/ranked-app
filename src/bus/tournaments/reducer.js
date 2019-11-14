// Core
import { Map, List, fromJS } from 'immutable';

// Types
import { types } from './types';

import image from '../../theme/assets/svg/logoShortOriginal.svg';

const initialState = Map({
    avatar: '',
    currentTournaments: List(),
    email: '',
    gamesPlayedLifetime: 0,
    id: '',
    league: '',
    nickname: '',
    pointsEarnedLifetime: Map({
        solo: List(),
        party: List(),
    }),
    team: Map({}),
    lastGame: Map({
        assists: 0,
        deaths: 0,
        direImages: [image, image, image, image, image],
        kills: 0,
        playerHeroImage: image,
        radiantImages: [image, image, image, image, image],
        matchId: '',
        victory: true,
    }),
});

export const profileReducer = (state = initialState, { type, payload = {} }) => {
    switch (type) {
        case types.FILL_PROFILE_DATA:
            return state.merge(payload);

        case types.FILL_LAST_GAME:
            return state.set('lastGame', fromJS(payload));

        default:
            return state;
    }
};
