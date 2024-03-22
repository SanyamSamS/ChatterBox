import Sidebar from '../components/Sidebar';
// import RecentChats from '../components/RecentChats';
// import ChatArea from '../components/ChatArea';
import Header from '../components/Header';

import { ChatEngine } from 'react-chat-engine';

function Messages({user}) {
  return (
    <main>
    <Header />
    {/* <div className="main-container" style={{height: '90vh'}}>
      <Sidebar />
      <RecentChats />
      <ChatArea />
    </div> */}
      <div className="main-container" style={{height: '90vh', display: 'flex'}}>
        <Sidebar />
        <div style={{ flexGrow: 1 }}>
          <ChatEngine
            height="90vh"
            width="80vw"
            projectID="ad9c9194-9e13-41fe-9ae3-d6510a62a0f4" 
            userName={user.username}
            userSecret={user.secret}
          />
        </div>
      </div>
    </main>
  );
}

export default Messages;