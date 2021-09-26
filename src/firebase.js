import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAJHmfUMMEAn87wjxd-MXxrpx5thaMRhhc",
  authDomain: "fir-login-4641c.firebaseapp.com",
  projectId: "fir-login-4641c",
  storageBucket: "fir-login-4641c.appspot.com",
  messagingSenderId: "744107058336",
  appId: "1:744107058336:web:2b59054ca0ff8869ed15c5"
};

const firebase = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();
export const auth = getAuth(firebase);

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;

      console.log(token, user);
    }).catch((error) => {
      console.error('LOGIN ERROR', error);
    });
}

export const signOutUser = () => {
  signOut(auth).then(() => {
    console.log('Signed out');
  }).catch((error) => {
    console.error(error);
  })
}
