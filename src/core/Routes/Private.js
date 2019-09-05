//  Core
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

//  Pages
import { TimeToBeta } from '../../pages';

// Instruments
import { book } from './book';
import { setOverwolfListeners } from '../../Tracker/listeners';

export default class Private extends Component {
    componentDidMount = () => setOverwolfListeners();

    render() {
        return (
            <Switch>
                <Route path={book.home} component={TimeToBeta} />
                <Redirect to={book.home} />
            </Switch>
        );
    }
}
