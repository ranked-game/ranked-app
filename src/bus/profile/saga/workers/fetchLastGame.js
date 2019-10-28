// Core
import { put, apply } from 'redux-saga/effects';

// Instruments
import { Api } from '../../../../REST';
import { profileActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

//* apply(context, method, arrayOfArguments)
//* calls method in context and with arguments

//* put -> dispatch
export function* fetchLastGame() {
    try {
        const response = yield apply(Api, Api.profile.fetchLastGameAsync);

        yield put(profileActions.fillLastGame(response));
    } catch (error) {
        yield put(uiActions.emitError(error, '-> fetchLastGame worker'));
    }
}
