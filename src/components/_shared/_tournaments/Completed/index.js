// Core
import React, { Component } from 'react';

// Styles
import Styles from './styles.module.scss';

// Instruments
import dotaLogo from '../../../../theme/assets/svg/dota-logo.svg';
import logoShortYellow from '../../../../theme/assets/svg/logoShortYellow.svg';

export default class CompletedTournament extends Component {
    render() {
        return (
            <section className={Styles.container}>
                <div className={Styles.header}>
                    <img className={Styles.gameLogo} src={dotaLogo} alt="" />
                    <p className={Styles.name}>SuperCoolName</p>
                    <p className={Styles.part}>
                        <span>Prize pool:</span>
                        <br />
                        50
                    </p>
                    <p className={Styles.part}>
                        <span>Ended on:</span>
                        <br />
                        12.12.12
                    </p>
                </div>
                <div className={Styles.titles}>
                    <p>Rank</p>
                    <p>Nickname</p>
                    <p>Points</p>
                    <p>Winnings</p>
                </div>
                <div className={Styles.userResult}>
                    <p className={Styles.rank}>1.</p>
                    <div className={Styles.user}>
                        <img src={logoShortYellow} alt="" />
                        <p>Who Is John Galt?</p>
                    </div>
                    <p className={Styles.games}>460.5</p>
                    <p className={Styles.points}>
                        <img />
                        10
                    </p>
                </div>
            </section>
        );
    }
}
