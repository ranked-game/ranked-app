// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// Routes
import Public from './Routes/Public';
import Private from './Routes/Private';

// Instruments
import TopControlBar from '../components/TopControlBar';

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.get('isAuthenticated'),
});

@hot(module)
@withRouter
@connect(mapStateToProps)
export default class App extends Component {
    render() {
        const { isAuthenticated } = this.props;

        return (
            <>
                <TopControlBar />
                {isAuthenticated ? <Private /> : <Public />}
            </>
        );
    }
}
