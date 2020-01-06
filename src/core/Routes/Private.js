//  Core
import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

//  Pages
import { App } from '../../pages';

// Instruments
import { book } from './book';
import { setOverwolfListeners } from '../../Tracker';
import { setGlobalVariables } from '../../utils/globalVars';

const Private = () => {
    useEffect(setGlobalVariables);
    useEffect(setOverwolfListeners);

    return (
        <Switch>
            <Route path={book.home} component={App} />
            <Redirect to={book.home} />
        </Switch>
    );
};

export default Private;
