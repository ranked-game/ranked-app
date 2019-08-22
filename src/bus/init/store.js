//Core
import { createStore } from 'redux';

//Roots
import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';

//Middleware
import { enhancedStore, sagaMiddleware } from './middleware/core';

export const store = createStore(rootReducer, enhancedStore);

//* викликати ініціалізацію редакс саги потрібно тільки ПІСЛЯ створення стора
sagaMiddleware.run(rootSaga);
