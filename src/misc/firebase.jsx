import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyAtshz1gL5-fi_6q7UxRdTUBB7HfEHbNSU',
  authDomain: 'chat-web-app-97787.firebaseapp.com',
  projectId: 'chat-web-app-97787',
  storageBucket: 'chat-web-app-97787.appspot.com',
  messagingSenderId: '810555645600',
  appId: '1:810555645600:web:e07b475b59b93554e973c5',
};

const app = firebase.initializeApp(config);

export const auth = app.auth();
export const database = app.database();
