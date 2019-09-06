// Core
import React, { Component } from 'react';

// Styles
import Styles from './styles.module.scss';

// Instruments
import arrow from '../../theme/assets/svg/left-arrow.svg';
import minimize from '../../theme/assets/svg/minimize.svg';
import close from '../../theme/assets/svg/close.svg';

export default class TopControlBar extends Component {
    _minimize = () => {
        overwolf.windows.getCurrentWindow((data) => {
            const { id } = data.window;

            overwolf.windows.minimize(id, () => {
                console.log('--- minimized ---');
            });
        });
    };

    _closeWindow = () => {
        overwolf.windows.obtainDeclaredWindow('controller', (data) => {
            const { id } = data.window;
            overwolf.windows.close(id, (result) => console.log(result));
        });
    };

    _onMouseDown = (e) => {
        const {
            button,
            target: { className },
        } = e;

        if (button !== 0 || (className !== Styles.container && className !== Styles.title)) {
            return null;
        }

        return overwolf.windows.getCurrentWindow((data) => {
            const { id } = data.window;
            overwolf.windows.dragMove(id);
        });
    };

    _handleArrowClick = () => {
        console.log('arrow button clicked');
    };

    render() {
        return (
            <section className={Styles.container} onMouseDown={this._onMouseDown}>
                <p className={Styles.title}>Ranked Game</p>
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
                <img src={close} alt="close button" onClick={this._closeWindow} />
            </section>
        );
    }
}
