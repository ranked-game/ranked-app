//  Core
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { hot } from 'react-hot-loader';

//  Pages
import { App } from '../../pages';

// Instruments
import { book } from './book';
import { setOverwolfListeners } from '../../Tracker';
import { setGlobalVariables } from '../../utils/globalVars';

@hot(module)
export default class Private extends Component {
    componentDidMount = () => {
        setGlobalVariables();
        setOverwolfListeners();
    };

    render() {
        return (
            <Switch>
                <Route path={book.home} component={App} />
                <Redirect to={book.home} />
            </Switch>
        );
    }
}
