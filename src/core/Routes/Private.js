// Core
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Pages
import { Dash, Hist, Lead, Marketplace } from '../pages';

//Instruments
import { book } from './book';
import { setOverwolfListeners } from '../components/_Tracker/instruments/OWListeners';
import { notifications } from '../components/_notifications';

export default class Private extends Component {
    componentDidMount = () => {
        if (!navigator.onLine) {
            return notifications.error(
                'You seem to be offline. Please, check you network connection.',
                false,
            );
        }

        localStorage.removeItem('intervals-set');

        try {
            console.log('setting listeners...');
            setOverwolfListeners();
        } catch (error) {
            return null;
        }
    };

    render() {
        return (
            <Switch>
                <Route path={book.lounge} component={Dash} />
                <Route path={book.history} component={Hist} />
                <Route path={book.leaderboard} component={Lead} />
                <Route path={book.marketplace} component={Marketplace} />
                <Redirect to={book.lounge} />
            </Switch>
        );
    }
}
