import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyC3B4c4oC6yfelveiJSYJQ-i21iRpEJ7NM',
  authDomain: 'crwn-db-d0d62.firebaseapp.com',
  projectId: 'crwn-db-d0d62',
  storageBucket: 'crwn-db-d0d62.appspot.com',
  messagingSenderId: '731741039889',
  appId: '1:731741039889:web:cd67639f0c62aa249830b0',
  measurementId: 'G-8KWRH17EBL',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
