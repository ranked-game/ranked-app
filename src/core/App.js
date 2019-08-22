//Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

//Routes
import Public from './Routes/Public';

@hot(module)
@withRouter
@connect()
export default class App extends Component {
    render() {
        return <Public />;
    }
}
