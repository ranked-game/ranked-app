// Core
import React from 'react';

// Components
import TopControlBar from './TopControlBar';
import Timer from './Timer';
import MainNavigation from './MainNavigation';
import AccountSummary from './AccountSummary';
import ProfileDetails from './ProfileDetails';
import Tournaments from './Tournaments';

import {
    Leaderboard as TournamentLeaderboard,
    UserTournamentStats,
    CompletedStats,
} from '../components/_shared/_tournaments';

/*
    Sometimes we want to control UI via redux state
    and need a convenient way to render needed components.
    As soon as storing components themselves in redux store
    is meant to be a bad practice, we're just storing name of the component
    and rendering it with Admin function
*/
const Admin = ({ name, props }) => {
    /*
        1) Props are passed into component

        2) Some keys in Components may differ from actual component name
           in favor of better syntax through the app.
    
           Add such cases to the bottom of the list.
    */
    const Components = {
        TopControlBar: <TopControlBar {...props} />,
        Timer: <Timer {...props} />,
        MainNavigation: <MainNavigation {...props} />,
        AccountSummary: <AccountSummary {...props} />,
        CompletedStats: <CompletedStats {...props} />,

        // Names of components below are changed
        Profile: <ProfileDetails {...props} />,
        Tourneys: <Tournaments {...props} />,
        TournamentLeaderboard: <TournamentLeaderboard {...props} />,
        UserTournamentStats: <UserTournamentStats {...props} />,
    };

    return Components[name];
};

/* Standard reexporting */
export { TopControlBar, Timer, MainNavigation, AccountSummary, ProfileDetails, Tournaments };
export default Admin;
