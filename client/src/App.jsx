import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Messages from './pages/Messages';
import Login from './pages/Login';

import { useState } from 'react';

function App() {

  const [user, setUser] = useState(undefined)

  return (
    <div>
      {!user ? (
        <Login onAuth={setUser} />
      ) : (
        <Messages user={user} />
      )}
      <p>Hello world</p>

    </div>
  );
}

export default App