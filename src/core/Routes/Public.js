//  Core
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

//  Pages
import Login from '../../components/Login';
import Registration from '../../components/Registration';
import PasswordRecovery from '../../components/PasswordRecovery';

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
