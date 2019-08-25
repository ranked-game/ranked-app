// Core
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Styles
import Styles from './styles.module.scss';

// Instrments
import _ from 'lodash';
import { book } from '../../core/Routes/book';
import InputField from '../_shared/InputField';
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
            [name]: value,
        });
    };

    _toggleTerms = () => {
        this.setState((prevState) => ({
            termsAgreed: !prevState.termsAgreed,
        }));
    };

    render() {
        const { termsAgreed } = this.state;

        const inputs = [
            {
                name: 'login',
                type: 'text',
            },
            {
                name: 'email',
                type: 'text',
            },
            {
                name: 'country',
                type: 'text',
            },
            {
                name: 'password',
                type: 'password',
            },
            {
                name: 'passwordConfirmation',
                type: 'password',
            },
        ];

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
                <button className={Styles.button} disabled={!termsAgreed}>
                    Sign Up
                </button>
            </section>
        );
    }
}
