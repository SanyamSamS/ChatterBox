import { ListGroup } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{width: '280px'}}>
      <h3>Profile</h3>
      <hr />
      <ListGroup>
        <ListGroup.Item href="#messages">
          Messages
        </ListGroup.Item>
        <ListGroup.Item href="#settings">
          Settings
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Sidebar;

