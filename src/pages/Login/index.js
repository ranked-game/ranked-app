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
                overwolf.windows.changePosition(
                    id,
                    0.5 * screen.width - 210,
                    0.5 * screen.height - 350,
                );
            }
        });

        window.addEventListener('storage', this._localStorageListener);
        localStorage.setItem('ranked-remember-me', true);
    };

    _localStorageListener = (e) => {
        if (e.key === 'ranked-external-auth') {
            overwolf.windows.obtainDeclaredWindow('app', (result) => {
                const {
                    window: { id },
                    status,
                } = result;

                if (status === 'success') {
                    overwolf.windows.restore(id);
                    overwolf.windows.changePosition(
                        id,
                        0.5 * screen.width - 210,
                        0.5 * screen.height - 350,
                    );
                }
            });

            overwolf.windows.getCurrentWindow((result) => {
                const {
                    window: { id },
                    status,
                } = result;

                if (status === 'success') {
                    overwolf.windows.close(id);
                }
            });
        }
    };

    _toggleRememberMe = () => {
        const { rememberMe } = this.state;
        if (!rememberMe) localStorage.setItem('ranked-remember-me', true);
        else localStorage.clear();

        this.setState((prevState) => ({
            rememberMe: !prevState.rememberMe,
        }));
    };

    _handleLoginButtonClick = (e) => {
        const { href } = e.target;

        overwolf.windows.obtainDeclaredWindow('app', (result) => {
            const {
                window: { id },
                status,
            } = result;

            if (status === 'success') {
                overwolf.windows.restore(id);
                overwolf.windows.changePosition(
                    id,
                    0.5 * screen.width - 210,
                    0.5 * screen.height - 350,
                );
            }
        });

        overwolf.windows.getCurrentWindow((result) => {
            const {
                window: { id },
                status,
            } = result;

            if (status === 'success') {
                overwolf.windows.close(id);
            }
        });

        // overwolf.windows.getCurrentWindow((result) => {
        //     const {
        //         window: { id },
        //         status,
        //     } = result;

        //     if (status === 'success') {
        //         overwolf.windows.changeSize(id, 1000, 700);
        //         overwolf.windows.changePosition(
        //             id,
        //             0.5 * screen.width - 500,
        //             0.5 * screen.height - 350,
        //         );
        //         window.location.replace(href);
        //     }
        // });
    };

    render() {
        const { rememberMe } = this.state;

        return (
            <section className={Styles.container}>
                <img src={logo} alt="logo" className={Styles.logo} />
                <p className={Styles.title}>Log In / Sign Up</p>
                <a
                    href="https://api.ranked.game/api/auth/google"
                    className={`${Styles.socialButton} ${Styles.google}`}
                    rel="noopener noreferrer"
                    target="_blank"
                    // onClick={this._handleLoginButtonClick}
                >
                    <img src={google} alt="" />
                    Log in with Google
                </a>

                <a
                    href="https://api.ranked.game/api/auth/discord"
                    className={`${Styles.socialButton} ${Styles.discord}`}
                    rel="noopener noreferrer"
                    target="_blank"
                    // onClick={this._handleLoginButtonClick}
                >
                    <img src={discord} alt="" />
                    Log in with Discord
                </a>

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
