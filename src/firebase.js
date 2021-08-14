import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

var config = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};

// Initialize Firebase
firebase.initializeApp(config);
let database = firebase.database();
if (window.location.hostname === "localhost") {
  // Point to the RTDB emulator running on localhost.
  database.useEmulator("localhost", 9000);
} 
export default database;
export { firebase };
export const TIMESTAMP = firebase.database.ServerValue.TIMESTAMP;
