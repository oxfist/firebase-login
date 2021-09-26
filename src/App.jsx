import { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import PropTypes from 'prop-types';

import logo from './logo.svg';
import './App.css';
import { auth, signInWithGoogle, signOutUser } from './firebase';

const AuthButton = ({ authenticated }) => {
  return authenticated ? (
    <button type="button" onClick={signOutUser}>
      Cerrar sesión
    </button>
  ) : (
    <button type="button" onClick={signInWithGoogle}>
      Iniciar sesión con Google
    </button>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  onAuthStateChanged(auth, (user) =>
    user ? setIsLoggedIn(true) : setIsLoggedIn(false)
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <AuthButton authenticated={isLoggedIn} />
      </header>
    </div>
  );
};

export default App;

AuthButton.propTypes = {
  authenticated: PropTypes.bool.isRequired,
};
