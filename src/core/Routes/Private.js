//  Core
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

//  Pages
// import Login from '../../components/Login';
import TimerPage from '../../components/TimeToBeta';

// Instruments
import { book } from './book';

export default class Private extends Component {
    render() {
        return (
            <Switch>
                <Route path={book.home} component={TimerPage} />
                <Redirect to={book.home} />
            </Switch>
        );
    }
}
