// Core
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

// Reducers
import { authReducer as auth } from '../auth/reducer';

export const rootReducer = (history) =>
    combineReducers({
        router: connectRouter(history),
        auth,
    });
