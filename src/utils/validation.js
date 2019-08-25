// import EmailValidator from 'email-validator';

/**
 *
 * @param {string} email
 */
export const emailValidation = (email) => {
    // return EmailValidator.validate(email);
    return email.length > 0;
};
