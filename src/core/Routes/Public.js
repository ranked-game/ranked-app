//  Core
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

//  Pages
import { Login, Registration, PasswordRecovery } from '../../pages';

// Instruments
import { book } from './book';

export default class Public extends Component {
    render() {
        return (
            <Switch>
                <Route path={book.login} component={Login} />
                <Route path={book.registration} component={Registration} />
                <Route path={book.recovery} component={PasswordRecovery} />
                <Redirect to={book.login} />
            </Switch>
        );
    }
}
