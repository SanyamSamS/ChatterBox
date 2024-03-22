import axios from "axios";
import { useState } from "react"; // Import useState

function LoginForm(props) {
  // Initialize state for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use state values for username and password in the request
    axios.post("http://localhost:3000/authenticate", { username, password })
      .then((r) => {
        // Assuming your server responds with appropriate data for ChatEngine authentication
        props.onAuth({ username, secret: password }); // Use the state values directly
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="background">
      <form onSubmit={handleSubmit} className="form-card">
        <div className="form-title">Login</div>

        <div className="auth">
          <div className="auth-label">Username</div>
          <input
            type="text"
            className="auth-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />

          <div className="auth-label">Password</div>
          <input
            type="password"
            className="auth-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />

          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;