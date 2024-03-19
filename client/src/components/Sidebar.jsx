import { ListGroup } from "react-bootstrap";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div>
        <img
          src="/profile-blue.png"
          className="sidebar-list-item"
          id="icon"
          href="#profile"
        ></img>
        <img
          src="/messages-blue.png"
          className="sidebar-list-item"
          id="icon"
          href="#messages"
        ></img>
        </div>
        <div>
        <img
          src="/settings-blue.png"
          className="sidebar-list-item spin"
          id="icon"
          href="#settings"
        ></img>
        </div>
    </div>
  );
};

export default Sidebar;