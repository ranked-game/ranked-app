//Core
import React, { Component } from 'react';

//Styles
import Styles from './styles.module.scss';

//Instruments
import close from '../../theme/assets/svg/close.svg';
import minimize from '../../theme/assets/svg/minimize.svg';

export default class TopControlBar extends Component {
    _close = () => {
        console.log('close button clicked');
    };

    _minimize = () => {
        console.log('minimize button clicked');
    };

    render() {
        return (
            <div className={Styles.container}>
                <img src={minimize} alt="minimize button" onClick={this._minimize} />
                <img src={close} alt="close button" onClick={this._close} />
            </div>
        );
    }
}
