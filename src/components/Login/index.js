// Core
import React, { Component } from 'react';

// Styles
import Styles from './styles.module.scss';

// Instruments
import logo from '../../theme/assets/svg/pseudoLogo.svg';
import checkbox from '../../theme/assets/svg/checkbox.svg';
import checkboxFilled from '../../theme/assets/svg/checkbox-filled.svg';

export default class Login extends Component {
    state = {
        rememberMe: true,
    };

    _toggleRememberMe = () => {
        this.setState((prevState) => ({
            rememberMe: !prevState.rememberMe,
        }));
    };

    render() {
        const { rememberMe } = this.state;

        return (
            <section className={Styles.container}>
                <img src={logo} alt="logo" className={Styles.logo} />
                <p className={Styles.title}>Log In</p>
                <p className={Styles.signup}>I don't have an account</p>
                <div className={Styles.input}>INput1</div>
                <div className={Styles.input}>INput2</div>
                <div className={Styles.rememberMe} onClick={this._toggleRememberMe}>
                    <img src={rememberMe ? checkboxFilled : checkbox} alt="remember me button" />
                    <span>Remember me</span>
                </div>
                <span className={Styles.forgotPassword}>Forgot password?</span>
                <button className={Styles.button}>Log In</button>
            </section>
        );
    }
}
