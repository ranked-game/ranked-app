// Core
import { Map, List, fromJS } from 'immutable';

// Types
import { types } from './types';

import image from '../../theme/assets/svg/logoShortOriginal.svg';

const initialState = Map({
    avatar: '',
    currentTournaments: List([
        Map({
            game: '7314',
            name: 'Test Tournament',
            description:
                'Lorem ipsum dolor sit amet, ad persius explicari inciderint sea. Qui ad wisi scriptorem. Duis wisi exerci per no, nec natum detraxit recusabo in, quo mollis aperiam aperiri ex. Ea nostrud electram sed.',
            vip: false,
            level: 'Rookie',
            mainType: 'Solo',
            subType: 'Core',
            dateStart: Date.UTC(2019, 11, 30),
            dateEnd: Date.UTC(2020, 1, 10),
            leaderboard: List(),
            reward: List(),
            coefficients: List(),
        }),
        Map({
            game: '7314',
            name: 'Test VIP Tournament',
            description:
                'Lorem ipsum dolor sit amet, ad persius explicari inciderint sea. Qui ad wisi scriptorem. Duis wisi exerci per no, nec natum detraxit recusabo in, quo mollis aperiam aperiri ex. Ea nostrud electram sed.',
            vip: true,
            level: 'Competitive',
            mainType: 'Solo',
            subType: 'Support',
            dateStart: Date.UTC(2019, 11, 30),
            dateEnd: Date.UTC(2020, 1, 10),
            leaderboard: List(),
            reward: List(),
            coefficients: List(),
        }),
    ]),
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
    matchHistory: Map({
        matches: List(),
        page: '1',
        pages: '1',
    }),
});

export const profileReducer = (state = initialState, { type, payload = {} }) => {
    switch (type) {
        case types.FILL_PROFILE_DATA:
            return state.merge(fromJS(payload));

        case types.FILL_MATCH_HISTORY:
            return state.set('matchHistory', fromJS(payload));

        case types.FILL_LAST_GAME:
            return state.set('lastGame', fromJS(payload));

        default:
            return state;
    }
};
