import axios from "axios";
import { useState } from "react"; 

function LoginForm(props) {
  // Initialize state for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const VITE_API_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use state values for username and password in the request
    axios.post(`${VITE_API_URL}/authenticate`, { username, password })
      .then(() => {
        // Assuming your server responds with appropriate data for ChatEngine authentication
        props.onAuth({ username, secret: password }); // Use the state values directly
        console.log(username, password);
      })
      .catch((error) => {
        console.error(error);
        console.log(username, password);
      });
  };

  return (
    <div className="login-info">
  <div className="background">
    <form onSubmit={handleSubmit} className="form-card">
      <div className="form-title">Chatter with your favourite crew.</div>


      <div className="auth">
        <div className="auth-label"></div>
        <input
          type="text"
          className="auth-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />


        <div className="auth-label"></div>
        <input
          type="password"
          className="auth-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />


        <button className="auth-button" type="submit">
          Login
        </button>
      </div>
    </form>
  </div>
  </div>
  );
}

export default LoginForm;