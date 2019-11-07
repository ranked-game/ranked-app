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

        yield put(
            profileActions.fillProfileData({
                ...result,
                nickname: result.nickname.length > 0 ? result.nickname : result.email.split('@')[0],
            }),
        );
    } catch (error) {
        yield put(uiActions.emitError(error, '-> getUserData worker'));
    }
}
