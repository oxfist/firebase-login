import logo from './logo.svg';
import './App.css';
import { signInWithGoogle } from './firebase';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <button onClick={ signInWithGoogle }>Iniciar sesión con Google</button>
      </header>
    </div>
  );
}

export default App;
