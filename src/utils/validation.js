// Instruments
import EmailValidator from 'email-validator';
import Validator from 'password-validator';
import Countries from './countries.json';
import _ from 'lodash';

/**
 *
 * @param {string} email
 */
export const emailValidation = (email) => {
    if (email.length === 0) return true;

    return EmailValidator.validate(email);
};

/**
 *
 * @param {string} password
 */
export const passwordValidation = (password) => {
    if (password.length === 0) return true;
    if (/[^A-Za-z0-9]+/.test(password)) return false;

    const validator = new Validator();

    validator
        .is()
        .min(8)
        .is()
        .max(16)
        .has()
        .digits()
        .has()
        .letters()
        .has()
        .not()
        .spaces()
        .has()
        .not()
        .symbols();

    return validator.validate(password);
};

/**
 *
 * @param {string} login
 */
export const loginValidation = (login) => {
    if (login.length === 0) return true;
    if (/[^A-Za-z0-9]+/.test(login)) return false;

    const validator = new Validator();

    validator
        .is()
        .min(4)
        .has()
        .not()
        .spaces()
        .has()
        .not()
        .symbols();

    return validator.validate(login);
};

/**
 *
 * @param {string} country
 */
export const countryValidation = (country) => {
    if (country.length === 0) return true;

    return Countries[_.capitalize(country)];
};
