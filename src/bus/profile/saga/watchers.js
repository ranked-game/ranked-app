// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { types } from '../types';

//* REMEMBER TO REEXPORT
// Workers
import { fetchMatchHistory } from './workers';

function* watchFetchHistory() {
    yield takeEvery(types.FETCH_MATCH_HISTORY_ASYNC, fetchMatchHistory);
}

export function* watchProfile() {
    yield all([call(watchFetchHistory)]);
}
