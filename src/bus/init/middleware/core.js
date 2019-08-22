//Core
import { applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';

//Middleware
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

const __DEV__ = process.env.NODE_ENV === 'development';

const logger = createLogger({
    duration: true,
    collapsed: true,
});

const history = createBrowserHistory();
const routerMiddleware = createRouterMiddleware(history);
const sagaMiddleware = createSagaMiddleware();
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = __DEV__ && devtools ? devtools : compose;

const middleware = [sagaMiddleware, routerMiddleware];

if (__DEV__) {
    middleware.push(logger);
}

const enhancedStore = composeEnhancers(applyMiddleware(...middleware));

export { enhancedStore, sagaMiddleware, history };
