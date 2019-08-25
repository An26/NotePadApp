import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyCI05TPJnBN0RA7YAxqvpvk7wmenqoTAZ0",
    authDomain: "notepadaf.firebaseapp.com",
    databaseURL: "https://notepadaf.firebaseio.com",
    projectId: "notepadaf",
    storageBucket: "notepadaf.appspot.com",
    messagingSenderId: "14811157671",
    appId: "1:14811157671:web:42d79465d8184f68"
};

firebase.initializeApp(firebaseConfig);


ReactDOM.render(<App />, document.getElementById('notepad-container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
