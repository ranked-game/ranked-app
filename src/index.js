//Core
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
// import { ConnectedRouter as Router } from 'react-router-redux';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

//Styles
import './theme/scss/index.scss';

//App
import App from './core/App';
import { store } from './bus/init/store';
import { history } from './bus/init/middleware/core';

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('app'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
