// Core
import {
    put,
    // apply
} from 'redux-saga/effects';

// Instruments
// import { Api } from '../../../../REST/';
import { authActions } from '../../actions';
// import { uiActions } from '../../../ui/actions';

//* apply(context, method, arrayOfArguments)
//* calls method in context and with arguments

//* put -> dispatch
export function* login() {
    try {
        yield put(authActions.authenticate());
    } catch (error) {
        // yield put(uiActions.emitError(error, '-> login worker'));
        // yield apply(notifications, notifications.error, [`${error.message}`]);
    } finally {
        // yield put(uiActions.stopFetching());
    }
}
