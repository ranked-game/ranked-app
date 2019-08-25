// Core
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Styles
import Styles from './styles.module.scss';

// Instruments
import logo from '../../theme/assets/svg/pseudoLogo.svg';
import checkbox from '../../theme/assets/svg/checkbox.svg';
import checkboxFilled from '../../theme/assets/svg/checkbox-filled.svg';
import InputField from '../_shared/InputField';
import { book } from '../../core/Routes/book';

export default class Login extends Component {
    state = {
        login: '',
        password: '',
        rememberMe: true,
    };

    _toggleRememberMe = () => {
        this.setState((prevState) => ({
            rememberMe: !prevState.rememberMe,
        }));
    };

    _handleInput = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value,
        });
    };

    render() {
        const { rememberMe, login, password } = this.state;

        return (
            <section className={Styles.container}>
                <img src={logo} alt="logo" className={Styles.logo} />
                <p className={Styles.title}>Sign In</p>
                <Link to={book.signup} className={Styles.signup}>
                    I don't have an account
                </Link>
                <InputField
                    className={Styles.input}
                    onChange={this._handleInput}
                    label={'Login'}
                    type={'text'}
                    value={login}
                    name={'login'}
                />
                <InputField
                    className={Styles.input}
                    onChange={this._handleInput}
                    label={'Password'}
                    type={'password'}
                    value={password}
                    name={'password'}
                />
                <div className={Styles.rememberMe} onClick={this._toggleRememberMe}>
                    <img src={rememberMe ? checkboxFilled : checkbox} alt="remember me button" />
                    <span>Remember me</span>
                </div>
                <Link to={book.recovery} className={Styles.forgotPassword}>
                    Forgot password?
                </Link>
                <button className={Styles.button}>Log In</button>
            </section>
        );
    }
}
