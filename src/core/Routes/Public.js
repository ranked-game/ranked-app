// Core
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Pages
import { StartupPage } from '../pages';

//Instruments
import { book } from './book';

export default class Private extends Component {
    render() {
        return (
            <Switch>
                <Route path={book.login} component={StartupPage} />
                <Redirect to={book.login} />
            </Switch>
        );
    }
}
