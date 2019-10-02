// Core
import React, { Component } from 'react';

// Styles
import Styles from './styles.module.scss';

// Instruments
import logoShortYellow from '../../theme/assets/svg/logoShortYellow.svg';

export default class AccountSummary extends Component {
    render() {
        return (
            <section className={Styles.container}>
                <img src={logoShortYellow} alt="" className={Styles.userpic} />
                <p className={Styles.username}>Who Is John Galt?</p>
                <div className={Styles.infoBlock}>
                    <p className={Styles.value}>120</p>
                    <p className={Styles.key}>Level</p>
                </div>
                <div className={Styles.infoBlock}>
                    <p className={Styles.value}>42</p>
                    <p className={Styles.key}>Tournaments won</p>
                </div>
                <div className={Styles.infoBlock}>
                    <p className={Styles.value}>1400</p>
                    <p className={Styles.key}>Smth else</p>
                </div>
            </section>
        );
    }
}
