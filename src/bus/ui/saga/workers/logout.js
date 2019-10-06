// Core
import { put, apply } from 'redux-saga/effects';

// Instruments
// import { profileActions } from '../../../profile/actions';
import { authActions } from '../../../auth/actions';
// import { historyActions } from '../../../app/history/actions';

//* apply(context, method, arrayOfArguments)
//* викликає метод з потрібним контекстом і аргументами

//* put -> запускає діспатч
export function* logout() {
    //? maybe we should add disabling token functionality on backend?
    //? if so -> add try..catch

    console.log('Logging out action dispatched');

    yield put(authActions.logout());
    yield apply(localStorage, localStorage.clear);
    // yield put(profileActions.clearProfile());
    // yield put(historyActions.clearHistory());
}
