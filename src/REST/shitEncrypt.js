// Imports
// import { encrypt, decrypt } from 'object-encrypt-decrypt';

// Defaults
const defaultHeaders = {
    'Content-Type': 'application/json',
    // Authorization: localStorage.getItem('ranked-game-token'),
    Authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyYTM0ZTRmLTAyN2UtNDg3Yi04NWFmLTcxZjk2YjcyMDFjOSIsImVtYWlsIjoicm9xdWVmb3JlQGZ1bGNydW0ucm9ja3MiLCJleHAiOjYwMDAwMDAwMDE1NzMzMzQwMDAsImlhdCI6MTU3MzMzNDMwNH0.GeTm9MLeMPOXHqFiQIKfwDGOOn5LjZ1rg-WnNfixqO0',
};

// Encryption
const shitEncrypt = ({ endpoint, headers = defaultHeaders, body: defaultBody, method }) => {
    if (!defaultBody) return fetch(endpoint, { method, headers });

    // const body = JSON.stringify({ data: encrypt(defaultBody) });

    // return () => fetch(endpoint, { method, headers, body });
    return fetch(endpoint, { method, headers, defaultBody });
};

export default shitEncrypt;
