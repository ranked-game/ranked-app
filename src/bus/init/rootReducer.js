//Core
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

//Reducers

export const rootReducer = combineReducers({
    router,
});
