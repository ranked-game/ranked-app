// Core
import React, { Component } from 'react';

// Styles
import Styles from './styles.module.scss';

// Instruments
import dotaLogo from '../../../../theme/assets/svg/dota-logo.svg';
import logoShortYellow from '../../../../theme/assets/svg/logoShortYellow.svg';

const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

export default class Leaderboard extends Component {
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
                <div className={Styles.data}>
                    {arr.map((item, index) => (
                        <div className={Styles.dataRow} key={index}>
                            <p className={Styles.rank}>{index + 1}.</p>
                            <div className={Styles.user}>
                                <img src={logoShortYellow} alt="" />
                                <p>Who Is John Galt?</p>
                            </div>
                            <p className={Styles.games}>42</p>
                            <p className={Styles.points}>460.5</p>
                        </div>
                    ))}
                </div>
            </section>
        );
    }
}
