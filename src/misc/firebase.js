import firebase from 'firebase/app';

const config={
  apiKey: "AIzaSyDBZcIEtwQQfKZIhsrBltLmCU9kqtEyPBc",
    authDomain: "chat-web-app-a65f2.firebaseapp.com",
    databaseURL: "https://chat-web-app-a65f2-default-rtdb.firebaseio.com",
    projectId: "chat-web-app-a65f2",
    storageBucket: "chat-web-app-a65f2.appspot.com",
    messagingSenderId: "109950916148",
    appId: "1:109950916148:web:64e48da0840fb4985cdc61"
};

const app = firebase.initializeApp(config);