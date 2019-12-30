// Core
import { put, apply } from 'redux-saga/effects';

// Instruments
import { Api } from '../../../../REST/';
import { uiActions } from '../../../ui/actions';
import { profileActions } from '../../../profile/actions';
// import { authActions } from '../../../auth/actions';

//* apply(context, method, arrayOfArguments)
//* calls method in context and with arguments

//* put -> dispatch
export function* getUserData() {
    try {
        const response = yield apply(Api, Api.account.getAccountData);
        const result = yield apply(response, response.json);

        if (response.status > 204) {
            throw new Error(result.error);
        }

        // console.log(result);

        yield put(
            profileActions.fillProfileData({
                ...result,
                nickname: result.nickname.length > 0 ? result.nickname : result.email.split('@')[0],
                currentTournaments: [
                    {
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
                        leaderboard: [],
                        reward: [],
                        coefficients: [],
                    },
                    {
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
                        leaderboard: [],
                        reward: [],
                        coefficients: [],
                    },
                ],
            }),
        );
        yield put(profileActions.fetchMatchHistoryAsync());
    } catch (error) {
        yield put(uiActions.emitError(error, '-> getUserData worker'));
    }
}
