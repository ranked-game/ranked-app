// Core
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'connected-react-router';

// Styles
import './theme/scss/index.scss';

// App
import Private from './core/Routes/Private';
import TopControlBar from './components/TopControlBar';
import { store } from './bus/init/store';
import { history } from './bus/init/middleware/core';

render(
    <Provider store={store}>
        <Router history={history}>
            <TopControlBar />
            <Private />
        </Router>
    </Provider>,
    document.getElementById('app'),
);
