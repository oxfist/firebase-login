import { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

import logo from './logo.svg';
import './App.css';
import { auth, signInWithGoogle, signOutUser } from './firebase';

function App() {
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
        {isLoggedIn ? (
          <button type="button" onClick={signOutUser}>
            Cerrar sesión
          </button>
        ) : (
          <button type="button" onClick={signInWithGoogle}>
            Iniciar sesión con Google
          </button>
        )}
      </header>
    </div>
  );
}

export default App;
