// Core
import React, { Component } from 'react';

// Styles
import Styles from './styles.module.scss';

// Instruments
import arrow from '../../theme/assets/svg/left-arrow.svg';
import minimize from '../../theme/assets/svg/minimize.svg';
import close from '../../theme/assets/svg/close.svg';

export default class TopControlBar extends Component {
    _close = () => {
        console.log('close button clicked');
    };

    _minimize = () => {
        console.log('minimize button clicked');
    };

    _handleArrowClick = () => {
        console.log('arrow button clicked');
    };

    render() {
        return (
            <section className={Styles.container}>
                <p>Ranked Game</p>
                <img
                    src={arrow}
                    alt="minimize button"
                    onClick={this._handleArrowClick}
                    className={Styles.arrow}
                />
                <img
                    src={minimize}
                    alt="minimize button"
                    onClick={this._minimize}
                    className={Styles.minimize}
                />
                <img src={close} alt="close button" onClick={this._close} />
            </section>
        );
    }
}
