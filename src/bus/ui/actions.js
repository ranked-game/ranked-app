import { types } from './types';

export const uiActions = {
    // Sync
    /**
     * @param {string} component - Component name or null
     * @param {object} props - Props object or null
     */
    fillLeftSide: (component, props) => ({
        type: types.FILL_LEFT_SIDE,
        payload: { component, props },
    }),

    /**
     * @param {string} component - Component name or null
     * @param {object} props - Props object or null
     */
    fillRightSide: (component, props) => ({
        type: types.FILL_RIGHT_SIDE,
        payload: { component, props },
    }),

    emitError: (error, meta = null) => ({
        type: types.EMIT_ERROR,
        payload: error,
        error: true,
        meta,
    }),
};
