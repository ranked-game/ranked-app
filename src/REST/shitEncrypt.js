// Imports
// import { encrypt, decrypt } from 'object-encrypt-decrypt';

// Defaults
const defaultHeaders = {
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('ranked-game-token'),
};

// Encryption
const shitEncrypt = ({ endpoint, headers = defaultHeaders, body: defaultBody, method }) => {
    if (!defaultBody) return fetch(endpoint, { method, headers });

    // const body = JSON.stringify({ data: encrypt(defaultBody) });

    // return () => fetch(endpoint, { method, headers, body });
    return fetch(endpoint, { method, headers, defaultBody });
};

export default shitEncrypt;
