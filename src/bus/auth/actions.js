import { types } from './types';

export const authActions = {
    // Sync
    authenticate: () => {
        return {
            type: types.AUTHENTICATE,
        };
    },
    logout: () => {
        return {
            type: types.LOGOUT,
        };
    },

    // Async
    loginAsync: (userData) => {
        return {
            type: types.LOGIN_ASYNC,
            payload: userData,
        };
    },
    logoutAsync: () => {
        return {
            type: types.LOGOUT_ASYNC,
        };
    },
    loginWithTokenAsync: (token) => {
        return {
            type: types.LOGIN_WITH_TOKEN_ASYNC,
            payload: token,
        };
    },
    getUserDataAsync: (token) => {
        return {
            type: types.GET_USERDATA_ASYNC,
            payload: token,
        };
    },
    refreshTokensAsync: () => {
        return {
            type: types.REFRESH_TOKENS_ASYNC,
        };
    },
};
