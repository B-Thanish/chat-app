import { Notification as Toast } from 'rsuite';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/messaging';
import 'firebase/functions';
import { isLocalhost } from './helpers';

const config = {
  apiKey: 'AIzaSyAtshz1gL5-fi_6q7UxRdTUBB7HfEHbNSU',
  authDomain: 'chat-web-app-97787.firebaseapp.com',
  projectId: 'chat-web-app-97787',
  storageBucket: 'chat-web-app-97787.appspot.com',
  messagingSenderId: '810555645600',
  appId: '1:810555645600:web:e07b475b59b93554e973c5',
};

export const fcmVapidKey =
  'BO_nnecbw8Tz7u4-QV7KIm6ncRkqYOVNei8RVj1Buu1wRfbHMwu9Dsyf8jPa-vZYCzdaoquki49BfFBi6af-oVQ';

const app = firebase.initializeApp(config);

export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
export const functions = app.functions('asia-southeast2');

export const messaging = firebase.messaging.isSupported()
  ? app.messaging()
  : null;

if (messaging) {
  messaging.onMessage(({ notification }) => {
    const { title, body } = notification;
    Toast.info({ title, description: body, duration: 0 });
  });
}

if (isLocalhost) {
  functions.useEmulator('localhost', 5001);
}
