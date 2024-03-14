import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Sidebar from './components/Sidebar';
import RecentChats from './components/RecentChats';
import ChatArea from './components/ChatArea';

const express = require('express');
const session = require('express-session');

const app = express();



function App() {
  return (
    <div className="d-flex" style={{height: '100vh'}}>
      <Sidebar />
      <RecentChats />
      <ChatArea />
    </div>
  );
};

export default App
