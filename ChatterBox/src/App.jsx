import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Sidebar from './components/Sidebar';
import RecentChats from './components/RecentChats';
import ChatArea from './components/ChatArea';

function App() {
  return (
    <div className="d-flex" style={{height: '100vh'}}>
      <Sidebar />
      <RecentChats />
      <ChatArea />
    </div>
  )
}

export default App
