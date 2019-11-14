import { types } from './types';

export const profileActions = {
    // Sync
    fillLastGame: (payload) => ({
        type: types.FILL_LAST_GAME,
        payload,
    }),
    fillProfileData: (payload) => ({
        type: types.FILL_PROFILE_DATA,
        payload,
    }),

    // Async
    fetchLastGameAsync: () => ({
        type: types.FETCH_LAST_GAME_ASYNC,
    }),
};
