import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  deleteUser,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAJHmfUMMEAn87wjxd-MXxrpx5thaMRhhc',
  authDomain: 'fir-login-4641c.firebaseapp.com',
  projectId: 'fir-login-4641c',
  storageBucket: 'fir-login-4641c.appspot.com',
  messagingSenderId: '744107058336',
  appId: '1:744107058336:web:2b59054ca0ff8869ed15c5',
};

const allowedEmailDomains = /laboratoria.la/;
const unauthorizedEmailErrorMessage = 'Only @laboratoria.la emails allowed';

const firebase = initializeApp(firebaseConfig);

const allowedEmail = (email) => {
  return email.match(allowedEmailDomains) !== null;
};

export const provider = new GoogleAuthProvider();
export const auth = getAuth(firebase);

export const signOutUser = () => {
  signOut(auth)
    .then(() => {})
    .catch(() => {});
};

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const { user } = result;

      if (!allowedEmail(user.email)) {
        deleteUser(user);
        throw new Error(unauthorizedEmailErrorMessage);
      }
    })
    .catch((e) => {
      console.error(e.message);
    });
};
