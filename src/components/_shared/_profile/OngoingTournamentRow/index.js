// Core
import React, { Component } from 'react';

// Styles
import Styles from './styles.module.scss';

// Instruments
import moment from 'moment';
import dotaLogo from '../../../../theme/assets/svg/dota-logo.svg';
import r6Logo from '../../../../theme/assets/images/r6-logo.jpg';

const logos = {
    '7314': dotaLogo,
    '10826': r6Logo,
};

export default class OngoingTournamentRow extends Component {
    render() {
        const {
            data: {
                vip,
                dateEnd,
                game,
                name,
                leaderboard,
                player: { rank, points },
            },
        } = this.props;

        return (
            <section className={`${Styles.container} ${vip && Styles.vip}`}>
                <img className={Styles.gameLogo} src={logos[game]} alt='' />
                <p className={Styles.tournamentName}>{name}</p>
                <p className={Styles.subTitle}>Rank:</p>
                <p className={Styles.participants}>
                    {rank}/{leaderboard.length}
                </p>
                <p className={Styles.subTitle}>Points:</p>
                <p className={Styles.points}>{points}</p>
                <p className={Styles.subTitle}>Ends:</p>
                <p className={Styles.timeToEnd}>{moment().to(dateEnd)}</p>
            </section>
        );
    }
}
