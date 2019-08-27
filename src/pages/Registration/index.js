// Core
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Styles
import Styles from './styles.module.scss';

// Instruments
import _ from 'lodash';
import { book } from '../../core/Routes/book';
import {
    emailValidation,
    passwordValidation,
    loginValidation,
    countryValidation,
} from '../../utils/validation';
import InputField from '../../components/_shared/InputField';
import logo from '../../theme/assets/svg/pseudoLogo.svg';
import checkbox from '../../theme/assets/svg/checkbox.svg';
import checkboxFilled from '../../theme/assets/svg/checkbox-filled.svg';

export default class Registration extends Component {
    state = {
        login: '',
        email: '',
        country: '',
        password: '',
        passwordConfirmation: '',
        termsAgreed: false,
    };

    _handleInput = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value.trim(),
        });
    };

    _toggleTerms = () => {
        this.setState((prevState) => ({
            termsAgreed: !prevState.termsAgreed,
        }));
    };

    render() {
        const { termsAgreed, email, password, passwordConfirmation, login, country } = this.state;

        const inputs = [
            {
                name: 'login',
                type: 'text',
                valid: loginValidation(login),
            },
            {
                name: 'email',
                type: 'text',
                valid: emailValidation(email),
            },
            {
                name: 'country',
                type: 'text',
                valid: countryValidation(country),
            },
            {
                name: 'password',
                type: 'password',
                valid: passwordValidation(password),
            },
            {
                name: 'passwordConfirmation',
                type: 'password',
                valid: password === passwordConfirmation,
            },
        ];

        const fieldsValid = inputs.filter((item) => !item.valid).length === 0;

        return (
            <section className={Styles.container}>
                <img src={logo} alt="logo" className={Styles.logo} />
                <p className={Styles.title}>Registration</p>
                <Link to={book.login} className={Styles.login}>
                    Already have an account?
                </Link>
                {inputs.map((item, index) => (
                    <InputField
                        className={Styles.input}
                        onChange={this._handleInput}
                        name={item.name}
                        value={this.state[item.name]}
                        label={
                            // workaround for passwordConfirmation variable
                            item.name.includes('C') ? 'Confirm password' : _.capitalize(item.name)
                        }
                        type={item.type}
                        valid={item.valid}
                        key={index}
                    />
                ))}
                <div className={Styles.termsAndConditions}>
                    <img
                        src={termsAgreed ? checkboxFilled : checkbox}
                        alt="terms agreement"
                        onClick={this._toggleTerms}
                    />
                    <span>
                        I've read and agree to our
                        <br /> Terms and Conditions
                    </span>
                </div>
                <button className={Styles.button} disabled={!termsAgreed || !fieldsValid}>
                    Sign Up
                </button>
            </section>
        );
    }
}
