// Core
import React, { Component } from 'react';

// Styles
import Styles from './styles.module.scss';

// Instruments
import logo from '../../theme/assets/svg/pseudoLogo.svg';
import google from '../../theme/assets/svg/google-logo.svg';
import facebook from '../../theme/assets/svg/facebook-logo.svg';
import discord from '../../theme/assets/svg/discord-logo.svg';
import steam from '../../theme/assets/svg/steam-logo.svg';
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
                <p className={Styles.title}>Log In / Sign Up</p>
                <div className={`${Styles.socialButton} ${Styles.google}`}>
                    <img src={google} alt="" />
                    Log in with Google
                </div>
                <div className={`${Styles.socialButton} ${Styles.discord}`}>
                    <img src={discord} alt="" />
                    Log in with Discord
                </div>
                <div className={`${Styles.socialButton} ${Styles.facebook}`}>
                    <img src={facebook} alt="" />
                    Log in with Facebook
                </div>
                <div className={`${Styles.socialButton} ${Styles.steam}`}>
                    <img src={steam} alt="" />
                    Log in with Steam
                </div>
                <div className={Styles.rememberMe} onClick={this._toggleRememberMe}>
                    <img src={rememberMe ? checkboxFilled : checkbox} alt="remember me button" />
                    <span>Remember me</span>
                </div>
            </section>
        );
    }
}
