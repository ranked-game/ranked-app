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

    fillMatchHistory: (payload) => ({
        type: types.FILL_MATCH_HISTORY,
        payload,
    }),

    // Async
    fetchMatchHistoryAsync: () => ({
        type: types.FETCH_MATCH_HISTORY_ASYNC,
    }),
};
