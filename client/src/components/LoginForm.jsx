function LoginForm(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    props.onAuth({ username: value, secret: value })
  };

  return (
    <div className="background">
      <form onSubmit={handleSubmit} className="form-card">
        <div className="form-title">Login</div>

        <div className="auth">
          <div className="auth-label">Username</div>
          <input className="auth-input" name="username" />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;