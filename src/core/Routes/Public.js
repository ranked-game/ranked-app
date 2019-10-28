//  Core
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { hot } from 'react-hot-loader';

//  Pages
import { Login } from '../../pages';

// Instruments
import { book } from './book';

@hot(module)
export default class Public extends Component {
    render() {
        return (
            <Switch>
                <Route path={book.login} component={Login} />
                <Redirect to={book.login} />
            </Switch>
        );
    }
}
