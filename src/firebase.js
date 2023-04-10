import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBkeWW4kFPEnLCy7pS1zM87KN_wzJrn7Uo",
  authDomain: "netflix-29a21.firebaseapp.com",
  projectId: "netflix-29a21",
  storageBucket: "netflix-29a21.appspot.com",
  messagingSenderId: "366349575028",
  appId: "1:366349575028:web:89224d4559f0612e620221"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;