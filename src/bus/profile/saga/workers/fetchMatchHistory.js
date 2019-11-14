// Core
import { put, apply } from 'redux-saga/effects';

// Instruments
import { Api } from '../../../../REST';
import { profileActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

//* apply(context, method, arrayOfArguments)
//* calls method in context and with arguments

//* put -> dispatch
export function* fetchMatchHistory() {
    try {
        const response = yield apply(Api, Api.account.getMatchHistory);
        const { data, error } = yield apply(response, response.json);

        if (response.status > 204) {
            throw new Error(error);
        }

        yield put(profileActions.fillMatchHistory(data));
    } catch (error) {
        yield put(uiActions.emitError(error, '-> fetchMatchHistory worker'));
    }
}
