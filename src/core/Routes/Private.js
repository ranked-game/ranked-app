//  Core
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

//  Pages
import { TimeToBeta } from '../../pages';

// Instruments
import { book } from './book';

export default class Private extends Component {
    render() {
        return (
            <Switch>
                <Route path={book.home} component={TimeToBeta} />
                <Redirect to={book.home} />
            </Switch>
        );
    }
}
