// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Styles
import Styles from './styles.module.scss';

// Instruments
import arrow from '../../../../theme/assets/svg/left-arrow.svg';
import logo from '../../../../theme/assets/svg/logoShortYellow.svg';

// Actions
import { uiActions } from '../../../../bus/allActions';

const mapStateToProps = (state) => ({
    ...state,
});

const mapDispatchToProps = {
    fillLeftSide: uiActions.fillLeftSide,
    fillRightSide: uiActions.fillRightSide,
};

@connect(
    mapStateToProps,
    mapDispatchToProps,
)
export default class UserTournamentStats extends Component {
    _closeStats = () => {
        const { fillLeftSide, fillRightSide } = this.props;

        fillLeftSide('AccountSummary');
        fillRightSide('Tourneys', { active: 'Ongoing' });
    };

    render() {
        return (
            <section className={Styles.container}>
                <div className={Styles.header}>
                    <img src={arrow} onClick={this._closeStats} />
                    <p>Back to the tournament list</p>
                </div>
                <div className={Styles.data}>
                    <div className={Styles.shortInfoContainer}>
                        <img className={Styles.userPic} src={logo} />
                        <p className={`${Styles.key} ${Styles.player}`}>Player:</p>
                        <p className={`${Styles.value} ${Styles.player}`}>Who Is John Galt?</p>
                        <p className={Styles.key}>Points earned:</p>
                        <p className={Styles.value}>10</p>
                        <p className={Styles.key}>Progress:</p>
                        <p className={Styles.value}>+ 2</p>
                        <p className={Styles.key}>Games played:</p>
                        <p className={Styles.value}>0</p>
                        <p className={`${Styles.currentRank} ${true && Styles.golden}`}>1</p>
                    </div>
                    <div className={Styles.mainInfoContainer}>Charts and stuff here</div>
                </div>
            </section>
        );
    }
}
