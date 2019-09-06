// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Styles
import Styles from './styles.module.scss';

// Instruments
import logo from '../../theme/assets/svg/logoBigHorizontal.svg';
import google from '../../theme/assets/svg/google-logo.svg';
import discord from '../../theme/assets/svg/discord-logo.svg';
// import steam from '../../theme/assets/svg/steam-logo.svg';
import checkbox from '../../theme/assets/svg/checkbox.svg';
import checkboxFilled from '../../theme/assets/svg/checkbox-filled.svg';

// Actions
import { authActions } from '../../bus/auth/actions';

const mapDispatchToProps = {
    authenticate: authActions.authenticate,
};

@connect(
    null,
    mapDispatchToProps,
)
export default class Login extends Component {
    state = {
        rememberMe: true,
    };

    componentDidMount = () => {
        overwolf.windows.obtainDeclaredWindow('login', (result) => {
            const {
                window: { id },
                status,
            } = result;

            if (status === 'success') {
                overwolf.windows.changeSize(id, 420, 700);
            }
        });
    };

    _toggleRememberMe = () => {
        this.setState((prevState) => ({
            rememberMe: !prevState.rememberMe,
        }));
    };

    _handleLoginButtonClick = (e) => {
        const { id } = e.target;

        overwolf.windows.getCurrentWindow((result) => {
            const {
                window: { id, left, top },
                status,
            } = result;

            if (status === 'success') {
                overwolf.windows.changeSize(id, 1000, 700);
                overwolf.windows.changePosition(id, Math.max(20, left - 400), top);
            }
        });

        window.location.replace(`http://api.ranked.game/api/auth/${id}`);
    };

    render() {
        const { rememberMe } = this.state;

        return (
            <section className={Styles.container}>
                <img src={logo} alt="logo" className={Styles.logo} />
                <p className={Styles.title}>Log In / Sign Up</p>
                <div
                    className={`${Styles.socialButton} ${Styles.google}`}
                    onClick={this._handleLoginButtonClick}
                    id="google"
                >
                    <img src={google} alt="" />
                    Log in with Google
                </div>
                <div
                    className={`${Styles.socialButton} ${Styles.discord}`}
                    onClick={this._handleLoginButtonClick}
                    id="discord"
                >
                    <img src={discord} alt="" />
                    Log in with Discord
                </div>
                {/*
                <div
                    className={`${Styles.socialButton} ${Styles.steam}`}
                    onClick={this._handleLoginButtonClick}
                >
                    <img src={steam} alt="" />
                    Log in with Steam
                </div> */}
                <div className={Styles.rememberMe} onClick={this._toggleRememberMe}>
                    <img src={rememberMe ? checkboxFilled : checkbox} alt="remember me button" />
                    <span>Remember me</span>
                </div>
            </section>
        );
    }
}
