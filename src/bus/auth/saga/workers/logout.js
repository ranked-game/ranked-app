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
    console.log('Logging out action dispatched');
    yield apply(localStorage, localStorage.clear);

    yield apply(overwolf, overwolf.windows.obtainDeclaredWindow, [
        'login',
        (result) => {
            const {
                window: { id },
                status,
            } = result;

            if (status === 'success') {
                overwolf.windows.restore(id);
            }
        },
    ]);

    yield apply(overwolf, overwolf.windows.getCurrentWindow, [
        (result) => {
            const {
                window: { id },
                status,
            } = result;

            if (status === 'success') {
                overwolf.windows.close(id);
            }
        },
    ]);

    // this usually sets isAuthenticated to false
    yield put(authActions.logout());
}
