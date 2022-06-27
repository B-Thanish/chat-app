/* eslint-disable no-console */
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/messaging';

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
export const storage = app.storage();

export const messaging = firebase.messaging.isSupported()
  ? app.messaging()
  : null;

if (messaging) {
  messaging.usePublicVapidKey(
    'BO_nnecbw8Tz7u4-QV7KIm6ncRkqYOVNei8RVj1Buu1wRfbHMwu9Dsyf8jPa-vZYCzdaoquki49BfFBi6af-oVQ'
  );

  messaging.onMessage(data => {
    console.log(data);
  });
}
