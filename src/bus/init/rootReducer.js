//Core
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

//Reducers

export const rootReducer = (history) =>
    combineReducers({
        router: connectRouter(history),
    });
