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
    matchHistory: state.profile.get('matchHistory').toJS(),
});

const mapDispatchToProps = {
    fillLeftSide: uiActions.fillLeftSide,
};

@connect(mapStateToProps, mapDispatchToProps)
export default class WinrateBox extends Component {
    _openDetails = () => {
        const { fillLeftSide } = this.props;

        fillLeftSide('LineChart', { title: 'Winrate' });
    };

    _countWinrate = () => {
        const { matchHistory } = this.props;
        let victories = 0;
        let defeats = 0;

        matchHistory.forEach(({ created, data: { victory } }) => {
            // Taking only matches during this week
            if (
                !moment()
                    .startOf('week')
                    .isBefore(created)
            )
                return null;

            // Increment
            if (victory) return victories++;
            return defeats++;
        });

        return (victories / defeats) * 100;
    };

    render() {
        const { className } = this.props;
        const winrate = this._countWinrate();

        return (
            <section className={`${Styles.container} ${className}`} onClick={this._openDetails}>
                <span className={Styles.label}>Winrate</span>
                <div className={Styles.data}>
                    <p className={Styles.text}>During this week:</p>
                    <p className={Styles.dimension}>
                        {winrate ? winrate.toFixed(2) : '...'}
                        <br />
                        <span>percent</span>
                    </p>
                </div>
            </section>
        );
    }
}
