// Core
import React, { Component } from 'react';

// Styles
import Styles from './styles.module.scss';

// Instruments
import dotaLogo from '../../../../theme/assets/svg/dota-logo.svg';

export default class GameHistoryRow extends Component {
    render() {
        const { openGameDetails, active } = this.props;

        return (
            <section
                className={`${Styles.container} ${active && Styles.active}`}
                id={1}
                onClick={openGameDetails}
            >
                <img className={Styles.gameLogo} src={dotaLogo} />
                <>
                    <p className={Styles.title}>Score:</p>
                    <p className={Styles.title}>Outcome:</p>
                    <p className={Styles.title}>Tournament name:</p>
                    <p className={Styles.title}>Points earned:</p>
                </>
                <>
                    <p className={Styles.data}>3 / 2 / 6</p>
                    <p className={Styles.data}>Victory</p>
                    <p className={Styles.data}>Dota 2 BigDaddy</p>
                    <p className={Styles.data}>15</p>
                </>
            </section>
        );
    }
}
