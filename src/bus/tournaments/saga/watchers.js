// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { types } from '../types';

//* REMEMBER TO REEXPORT
// Workers
import { fetchLastGame } from './workers';

function* watchFetchLastGame() {
    yield takeEvery(types.FETCH_LAST_GAME_ASYNC, fetchLastGame);
}

export function* watchProfile() {
    yield all([call(watchFetchLastGame)]);
}
