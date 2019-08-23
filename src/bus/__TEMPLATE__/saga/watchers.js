// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { types } from '../types';

// Workers
import {} from './workers';

function* name() {
    yield takeEvery(types.NAME, workerName);
}

export function* watchHistory() {
    yield all([call(name)]);
}
