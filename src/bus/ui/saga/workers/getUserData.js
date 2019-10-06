// Core
import { put, apply } from 'redux-saga/effects';

// Instruments
import { Api } from '../../../../REST/';
import { uiActions } from '../../../ui/actions';
import { profileActions } from '../../../profile/actions';
import { authActions } from '../../../auth/actions';
import { leaderboardActions } from '../../../app/leaderboard/actions';

//* apply(context, method, arrayOfArguments)
//* calls method in context and with arguments

//* put -> dispatch
export function* getUserData({ payload: token }) {
    // console.log('Trying to get user data...');
    try {
        const response = yield apply(Api, Api.auth.getUserData, [token]);
        const data = yield apply(response, response.json);

        if (response.status === 401) {
            try {
                yield put(authActions.refreshTokensAsync());
                const newToken = yield apply(localStorage, localStorage.getItem, ['buff-token']);
                yield put(authActions.loginWithTokenAsync(newToken));
            } catch {
                yield put(authActions.logoutAsync());
                throw new Error(data.error);
            }
        }

        if (response.status !== 200) {
            throw new Error(data.error);
        }

        if (!localStorage.getItem('buff-token') || !localStorage.getItem('buff-refresh-token')) {
            throw new Error('Network error (AWS)');
        }

        // console.log('Got user data, thx. Filling profile out...');
        yield apply(sessionStorage, sessionStorage.setItem, ['login', data.account.login]);
        yield apply(sessionStorage, sessionStorage.setItem, ['email', data.account.email]);
        yield put(profileActions.getDailyChallengeDataAsync());
        yield put(profileActions.getWeeklyChallengeDataAsync());
        yield put(profileActions.fillProfile(data.account));
        yield put(leaderboardActions.fetchLeaderboardAsync());
        yield put(authActions.authenticate());
    } catch (error) {
        yield put(uiActions.emitError(error, '-> getUserData worker'));
    }
}
