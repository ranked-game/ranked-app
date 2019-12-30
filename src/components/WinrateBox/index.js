// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Styles
import Styles from './styles.module.scss';

// Instruments
import moment from 'moment';
import { countWeeklyWinrateByDays, countWinrateByWeek } from '../../utils';

// Actions
import { uiActions } from '../../bus/ui/actions';

const mapStateToProps = (state) => ({
    matchHistory: state.profile
        .get('matchHistory')
        .get('matches')
        .toJS(),
});

const mapDispatchToProps = {
    fillLeftSide: uiActions.fillLeftSide,
};

@connect(mapStateToProps, mapDispatchToProps)
export default class WinrateBox extends Component {
    _openDetails = () => {
        const { fillLeftSide, matchHistory } = this.props;

        // Getting matches of current week
        const currentWeekMatches = matchHistory.filter(({ created }) =>
            moment()
                .startOf('week')
                .isBefore(created),
        );

        return fillLeftSide('LineChartLastWeek', {
            title: 'Winrate',
            values: countWeeklyWinrateByDays(currentWeekMatches),
            name: 'Winrate',
        });
    };

    render() {
        const { className, matchHistory } = this.props;
        const currentWeekMatches = matchHistory.filter(({ created }) =>
            moment()
                .startOf('week')
                .isBefore(created),
        );

        return (
            <section className={`${Styles.container} ${className}`} onClick={this._openDetails}>
                <span className={Styles.label}>Winrate</span>
                <div className={Styles.data}>
                    <p className={Styles.text}>During this week:</p>
                    <p className={Styles.dimension}>
                        {countWinrateByWeek(currentWeekMatches) || '...'}
                        <br />
                        <span>percent</span>
                    </p>
                </div>
            </section>
        );
    }
}
