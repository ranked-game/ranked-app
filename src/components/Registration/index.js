// Core
import React, { Component } from 'react';

// Styles
import Styles from './styles.module.scss';

// Instrments
import logo from '../../theme/assets/svg/pseudoLogo.svg';
// import InputField from '../_shared/InputField';

export default class Registration extends Component {
    render() {
        return (
            <section className={Styles.container}>
                <img src={logo} alt="logo" className={Styles.logo} />
                <p className={Styles.title}>Sign In</p>
                <p className={Styles.signup}>I don't have an account</p>
                {/* <InputField
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
                /> */}
            </section>
        );
    }
}
