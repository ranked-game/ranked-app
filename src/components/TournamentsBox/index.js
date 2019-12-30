// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Styles
import Styles from './styles.module.scss';

// Instruments
import { OngoingTournamentRow } from '../_shared/_profile';
import logo from '../../theme/assets/svg/logoShort.svg';

// Actions
import { uiActions } from '../../bus/ui/actions';

const mapStateToProps = (state) => ({
    currentTournaments: state.profile.get('currentTournaments').toJS(),
});

const mapDispatchToProps = {
    fillLeftSide: uiActions.fillLeftSide,
};

@connect(mapStateToProps, mapDispatchToProps)
export default class TournamentsBox extends Component {
    _openDetails = () => {
        const { fillLeftSide } = this.props;

        fillLeftSide('LineChartLastWeek', { title: 'Tournaments performance' });
    };

    render() {
        const { className, currentTournaments } = this.props;

        return (
            <section className={`${Styles.container} ${className}`} onClick={this._openDetails}>
                <span className={Styles.label}>Ongoing tournaments</span>
                <div className={Styles.data}>
                    {currentTournaments.length > 0 ? (
                        currentTournaments.map((item, index) => (
                            <OngoingTournamentRow
                                key={index}
                                data={{
                                    ...item,
                                }}
                            />
                        ))
                    ) : (
                        <div className={Styles.loading}>
                            <img src={logo} alt='' />
                            <p>Calling FBI to retrieve your personal data...</p>
                        </div>
                    )}
                </div>
            </section>
        );
    }
}
