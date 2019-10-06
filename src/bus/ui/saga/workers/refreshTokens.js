//Core
import { put, apply } from 'redux-saga/effects';

//Instruments
import { Api } from '../../../../REST/';
import { uiActions } from '../../../ui/actions';

export function* refreshTokens() {
    try {
        const response = yield apply(Api, Api.auth.refreshToken);

        const data = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(data.error);
        }

        const { token, refreshToken } = data.tokens;

        // console.log(`new tokens`);
        // console.log(data.tokens);

        yield apply(localStorage, localStorage.setItem, ['buff-token', token]);
        yield apply(localStorage, localStorage.setItem, ['buff-refresh-token', refreshToken]);
    } catch (error) {
        yield put(uiActions.emitError(error, '-> refreshToken worker'));
    }
}
