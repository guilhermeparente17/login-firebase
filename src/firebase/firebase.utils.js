import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyDndQ1H9gPaBy0w70kBSvSC4HFgsOVPdVw",
    authDomain: "crwn-db-5df4a.firebaseapp.com",
    projectId: "crwn-db-5df4a",
    storageBucket: "crwn-db-5df4a.appspot.com",
    messagingSenderId: "154366023543",
    appId: "1:154366023543:web:07701774f402cf3cdff372",
    measurementId: "G-16HGHFNGJF"
  }

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShop = await userRef.get()

    if(!snapShop.exists){
      const { displayName, email } = userAuth
      const createdAt = new Date()

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch(error){
        console.log('error creating user', error.message)
      }
    }

    return userRef
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;