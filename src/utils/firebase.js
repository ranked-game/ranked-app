import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyDOhL7RM9rpyOcqBgeEiewSLjBhEeNMUUs',
    authDomain: 'ranked-game.firebaseapp.com',
    databaseURL: 'https://ranked-game.firebaseio.com',
    projectId: 'ranked-game',
    storageBucket: '',
    messagingSenderId: '978744122937',
    appId: '1:978744122937:web:b22b50361bb33e16',
};

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
