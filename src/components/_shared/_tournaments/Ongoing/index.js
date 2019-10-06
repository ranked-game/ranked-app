// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Styles
import Styles from './styles.module.scss';

// Instruments
import dotaLogo from '../../../../theme/assets/svg/dota-logo.svg';
import logoShortYellow from '../../../../theme/assets/svg/logoShortYellow.svg';

// Actions
import { uiActions } from '../../../../bus/allActions';

const mapDispatchToProps = {
    fillLeftSide: uiActions.fillLeftSide,
};

@connect(
    null,
    mapDispatchToProps,
)
export default class OngoingTournament extends Component {
    _openDetails = () => {
        const { fillLeftSide } = this.props;

        // 1) Fetch this exact tournament data to redux store
        // 2) Fill left side with tournament leaderboard
        // 3) Fill right side with user stats for this tourney
        fillLeftSide('TournamentLeaderboard');
    };

    render() {
        return (
            <section className={Styles.container} onClick={this._openDetails}>
                <div className={Styles.header}>
                    <img className={Styles.gameLogo} src={dotaLogo} alt="" />
                    <p className={Styles.name}>SuperCoolName</p>
                    <p className={Styles.part}>
                        <span>Points:</span>
                        <br />
                        50
                    </p>
                    <p className={Styles.part}>
                        <span>Something:</span>
                        <br />
                        54/100
                    </p>
                    <p className={Styles.part}>
                        <span>Ends in:</span>
                        <br />
                        24 hours
                    </p>
                </div>
                <div className={Styles.titles}>
                    <p>Rank</p>
                    <p>Nickname</p>
                    <p>Games</p>
                    <p>Points</p>
                    <p>Progress</p>
                </div>
                <div className={Styles.userResult}>
                    <p className={Styles.rank}>1.</p>
                    <div className={Styles.user}>
                        <img src={logoShortYellow} alt="" />
                        <p>Who Is John Galt?</p>
                    </div>
                    <p className={Styles.games}>42</p>
                    <p className={Styles.points}>460.5</p>
                    <p className={Styles.progress}>
                        <img />2
                    </p>
                </div>
            </section>
        );
    }
}
