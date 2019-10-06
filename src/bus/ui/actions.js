import { types } from './types';

export const uiActions = {
    // Sync
    fillLeftSide: (payload) => ({
        type: types.FILL_LEFT_SIDE,
        payload,
    }),

    fillRightSide: (payload) => ({
        type: types.FILL_RIGHT_SIDE,
        payload,
    }),

    emitError: (error, meta = null) => ({
        type: types.EMIT_ERROR,
        payload: error,
        error: true,
        meta,
    }),
};
