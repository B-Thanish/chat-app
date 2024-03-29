require('firebase-functions');
const admin = require('firebase-admin');
const serviceAccount = require('./service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://chat-web-app-97787-default-rtdb.firebaseio.com',
});

const { sendFcm } = require('./src/fcm');

exports.sendFcm = sendFcm;
