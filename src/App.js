import logo from './logo.svg';
import './App.css';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAJHmfUMMEAn87wjxd-MXxrpx5thaMRhhc",
  authDomain: "fir-login-4641c.firebaseapp.com",
  projectId: "fir-login-4641c",
  storageBucket: "fir-login-4641c.appspot.com",
  messagingSenderId: "744107058336",
  appId: "1:744107058336:web:2b59054ca0ff8869ed15c5"
};

const firebase = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(firebase);

const signInWithGoogle = () => {
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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={ signInWithGoogle }>Iniciar sesión con Google</button>
      </header>
    </div>
  );
}

export default App;
