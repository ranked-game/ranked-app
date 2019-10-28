// Core
import { all, call } from 'redux-saga/effects';

// Watchers
import { watchAuth } from '../auth/saga/watchers';
import { watchProfile } from '../profile/saga/watchers';

export function* rootSaga() {
    yield all([call(watchAuth), call(watchProfile)]);
}
