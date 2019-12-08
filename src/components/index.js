// Core
import React from 'react';

// Components
import TopControlBar from './TopControlBar';
import Timer from './Timer';
import MainNavigation from './MainNavigation';
import AccountSummary from './AccountSummary';
import Profile from './Profile';
import Tournaments from './Tournaments';
import LastMatchBox from './LastMatchBox';
import MatchesPlayedBox from './MatchesPlayedBox';
import WinrateBox from './WinrateBox';
import TournamentsBox from './TournamentsBox';
import SoloVsPartyBox from './SoloVsPartyBox';

import {
    Leaderboard as TournamentLeaderboard,
    UserTournamentStats,
    CompletedStats,
} from '../components/_shared/_tournaments';

import { GameDetails } from '../components/_shared/_profile';
import { LineChartLastWeek, SpiderwebChart } from '../components/_shared/_charts';

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
        Profile: <Profile {...props} />,
        Tourneys: <Tournaments {...props} />,
        UserTournamentStats: <UserTournamentStats {...props} />,
        GameDetails: <GameDetails {...props} />,
        LineChartLastWeek: <LineChartLastWeek {...props} />,
        SpiderwebChart: <SpiderwebChart {...props} />,

        TournamentLeaderboard: <TournamentLeaderboard {...props} />,
    };

    return Components[name];
};

/* Standard reexporting */
export {
    TopControlBar,
    Timer,
    MainNavigation,
    AccountSummary,
    Profile,
    Tournaments,
    LastMatchBox,
    MatchesPlayedBox,
    WinrateBox,
    TournamentsBox,
    SoloVsPartyBox,
};
export default Admin;
