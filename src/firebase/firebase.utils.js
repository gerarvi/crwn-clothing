import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAQaYjViS9zfoVqIVRV66MMoiOLEL9wLyo",
    authDomain: "crwn-db-f5f03.firebaseapp.com",
    projectId: "crwn-db-f5f03",
    storageBucket: "crwn-db-f5f03.appspot.com",
    messagingSenderId: "1027607570319",
    appId: "1:1027607570319:web:4235c9bac3523ac5cecdfa",
    measurementId: "G-C1GKNKQCB6"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  // console.log(userRef); 
  // console.log(snapShot);
  if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch(err){
      console.log("error creating user", err.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;