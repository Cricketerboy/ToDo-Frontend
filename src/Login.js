import { useState } from "react";
import { supabase } from "./supabaseClient";
import './Login.css';

function Login({ setAuthenticated }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    setErrorMessage("");
    const { data: { user }, error } = await supabase.auth.signInWithPassword({ email, password });
    if (user) {
      setAuthenticated(true);
    } else {
      setErrorMessage(error.message);
    }
  };

  const handleSignup = async () => {
    setErrorMessage("");
    const { data: { user }, error } = await supabase.auth.signUp({ email, password });
    if (user) {
      alert("Signup complete! Please log in now.");
      setAuthenticated(true);
    } else {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="login-container">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleSignup}>Sign Up</button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default Login;
