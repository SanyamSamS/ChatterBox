import Sidebar from '../components/Sidebar';
import RecentChats from '../components/RecentChats';
import ChatArea from '../components/ChatArea';

function Messages() {
  return (
    <div className="main-container" style={{height: '90vh'}}>
      <Sidebar />
      <RecentChats />
      <ChatArea />
    </div>
  );
}

export default Messages;