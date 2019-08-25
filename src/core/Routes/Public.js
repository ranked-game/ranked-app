//  Core
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

//  Pages
import Login from '../../components/Login';
import Registration from '../../components/Registration';

// Instruments
import { book } from './book';

export default class Public extends Component {
    render() {
        return (
            <Switch>
                <Route path={book.login} component={Login} />
                <Route path={book.signup} component={Registration} />
                <Redirect to={book.login} />
            </Switch>
        );
    }
}
