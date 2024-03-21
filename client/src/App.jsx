import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Messages from './pages/Messages';
import Login from './pages/Login';
import Header from './components/Header';

// const express = require('express');
// const session = require('express-session');

// const app = express();

const user = false // change to true to see messages

function App() {
  if (!user){
  return (
    <main>
    <Header />
    <Login  />
    </main>
  )} 
  else {
    return (
      <main>
      <Header />
      <Messages  />
      </main>
    )
  }
}

export default App