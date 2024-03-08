import { ListGroup } from 'react-bootstrap';

const RecentChats = () => {
  return (
    <div className="p-3">
      <h5>Recent Chats</h5>
      <ListGroup>
        <ListGroup.Item>Chat 1</ListGroup.Item>
        <ListGroup.Item>Chat 2</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default RecentChats;
