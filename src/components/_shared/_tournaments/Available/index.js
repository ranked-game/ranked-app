// Core
import React, { Component } from 'react';

// Styles
import Styles from './styles.module.scss';

// Instruments
// import moment from 'moment';
import dotaLogo from '../../../../theme/assets/svg/dota-logo.svg';

export default class AvailableTournament extends Component {
    render() {
        const { header, upcoming } = this.props;

        return (
            <section
                className={`${Styles.container} ${header && Styles.header} ${upcoming &&
                    Styles.upcoming}`}
            >
                {header ? (
                    <>
                        <p className={Styles.headerGame}>Game</p>
                        <p className={Styles.headerName}>Tourney name</p>
                        <p className={Styles.headerPoints}>Ranked points</p>
                        <p className={Styles.headerParticipants}>Participants</p>
                        <p className={Styles.headerTimeToStart}>Starts in:</p>
                    </>
                ) : (
                    <>
                        <img className={Styles.gameLogo} src={dotaLogo} alt='' />
                        <p className={Styles.name}>SuperCoolName</p>
                        <p className={Styles.points}>50</p>
                        <p className={Styles.participants}>54/100</p>
                        <p className={Styles.timeToStart}>24 hours</p>
                        {!upcoming && <button className={Styles.apply}>Join</button>}
                    </>
                )}
            </section>
        );
    }
}
