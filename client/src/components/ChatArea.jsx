import { useState } from "react";
import { Form, Button } from "react-bootstrap";

function ChatArea() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);
    setMessage(""); // Clear the text box after sending
  };

  return (
    <div className="chat-area-main">
      <div className="flex-grow-1 p-3">{/* Previous messages */}</div>
      <Form onSubmit={handleSubmit} className="chat-input">
        <Form.Group className="chat-form">
          <input
            className="text-input"
            value={message}
            name="message"
            type="text"
            placeholder="Type a message..."
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button className="send-button" type="submit">
            ↑
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default ChatArea;