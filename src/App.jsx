import { useState } from 'react';

import logo from './logo.svg';
import './App.css';
import { auth, signInWithGoogle, signOutUser } from './firebase';
import { onAuthStateChanged } from '@firebase/auth';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  onAuthStateChanged(auth, (user) => {
    return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        { isLoggedIn ?
          <button onClick={ signOutUser }>Cerrar sesión</button> :
          <button onClick={ signInWithGoogle }>Iniciar sesión con Google</button>
        }
      </header>
    </div>
  );
}

export default App;
