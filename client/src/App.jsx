import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Sidebar from './components/Sidebar';
import RecentChats from './components/RecentChats';
import ChatArea from './components/ChatArea';
import Header from './components/Header';

// const express = require('express');
// const session = require('express-session');

// const app = express();



function App() {
  return (
    <main>
    <Header />
    <div className="main-container" style={{height: '90vh'}}>
      <Sidebar />
      <RecentChats />
      <ChatArea />
    </div>
    </main>
  );
};

export default App