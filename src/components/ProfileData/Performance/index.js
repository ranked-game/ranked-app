// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Styles
import Styles from './styles.module.scss';

// Actions
import { uiActions } from '../../../bus/ui/actions';

// Instruments
import {
    LastMatchBox,
    TimeSpentBox,
    LifetimePointsBox,
    TournamentsBox,
    SoloVsPartyBox,
} from '../..';

const mapStateToProps = (state) => ({
    ...state,
});

const mapDispatchToProps = {
    fillLeftSide: uiActions.fillLeftSide,
};

@connect(
    mapStateToProps,
    mapDispatchToProps,
)
export default class Performance extends Component {
    render() {
        return (
            <section className={Styles.container}>
                <LastMatchBox className={Styles.LastMatchBox} />
                <LifetimePointsBox className={Styles.points} />
                <TimeSpentBox className={Styles.timeSpent} />
                <TournamentsBox className={Styles.tournaments} />
                <SoloVsPartyBox className={Styles.soloAndParty} />
            </section>
        );
    }
}
