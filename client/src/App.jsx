import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Messages from './pages/Messages';
import Login from './pages/Login';

import { useState } from 'react';

// const express = require('express');
// const session = require('express-session');

// const app = express();
// change to true to see messages

function App() {

  const [user, setUser] = useState(undefined)

  return (
    <div>
      {!user ? (
        <Login onAuth={setUser} />
      ) : (
        <Messages user={user} />
      )}
    </div>
  );
}

export default App