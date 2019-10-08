// Core
import React, { Component } from 'react';

// Styles
import Styles from './styles.module.scss';

// Instruments
import dotaLogo from '../../../../theme/assets/svg/dota-logo.svg';

export default class CompletedStats extends Component {
    render() {
        return (
            <section className={Styles.container}>
                <div className={Styles.header}>
                    <img className={Styles.gameLogo} src={dotaLogo} alt="" />
                    <p className={Styles.name}>SuperCoolName</p>
                    <p className={Styles.part}>
                        <span>Points:</span>
                        <br />
                        50
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
                </div>
                <div className={Styles.data}></div>
            </section>
        );
    }
}
