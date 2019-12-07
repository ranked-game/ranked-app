// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Styles
import Styles from './styles.module.scss';

// Instruments
import { countAmountOfMatchesDaily } from '../../utils';

// Actions
import { uiActions } from '../../bus/ui/actions';

const mapStateToProps = (state) => ({
    gamesPlayedLifetime: state.profile.get('gamesPlayedLifetime'),
    matchHistory: state.profile.get('matchHistory').toJS(),
});

const mapDispatchToProps = {
    fillLeftSide: uiActions.fillLeftSide,
};

@connect(mapStateToProps, mapDispatchToProps)
export default class MatchesPlayedBox extends Component {
    _openDetails = () => {
        const { fillLeftSide, matchHistory } = this.props;

        fillLeftSide('LineChart', {
            title: 'Time spent',
            name: 'Games',
            values: countAmountOfMatchesDaily(matchHistory),
        });
    };

    render() {
        const {
            className,
            // gamesPlayedLifetime,
            matchHistory,
        } = this.props;

        const lastWeekMatches = countAmountOfMatchesDaily(matchHistory).reduce(
            (prev, next) => prev + next,
        );

        return (
            <section className={`${Styles.container} ${className}`} onClick={this._openDetails}>
                <span className={Styles.label}>Matches played</span>
                <div className={Styles.data}>
                    <p className={Styles.text}>During this week:</p>
                    <p className={Styles.dimension}>
                        {lastWeekMatches}
                        <br />
                        <span>games</span>
                    </p>
                </div>
            </section>
        );
    }
}
