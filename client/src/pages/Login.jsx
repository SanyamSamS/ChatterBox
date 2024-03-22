import LoginForm from "../components/LoginForm";
import Header from "../components/Header";

function Login({ onAuth }) {
  return (
    <main>
    <Header />
    <div className="main-container" style={{height: '90vh'}}>
      <LoginForm onAuth={onAuth} />
    </div>
    </main>
  );
}

export default Login;