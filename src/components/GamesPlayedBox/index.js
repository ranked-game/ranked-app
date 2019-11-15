// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Styles
import Styles from './styles.module.scss';

// Instruments
import moment from 'moment';

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
export default class GamesPlayedBox extends Component {
    _openDetails = () => {
        const { fillLeftSide } = this.props;

        fillLeftSide('LineChart', { title: 'Time spent' });
    };

    render() {
        const {
            className,
            // gamesPlayedLifetime,
            matchHistory,
        } = this.props;
        const lastWeekMatches = matchHistory.filter(({ created }) =>
            moment()
                .startOf('week')
                .isBefore(created),
        );

        return (
            <section className={`${Styles.container} ${className}`} onClick={this._openDetails}>
                <span className={Styles.label}>Games played</span>
                <div className={Styles.data}>
                    <p className={Styles.text}>During this week:</p>
                    <p className={Styles.dimension}>
                        {lastWeekMatches.length}
                        <br />
                        <span>games</span>
                    </p>
                </div>
            </section>
        );
    }
}
