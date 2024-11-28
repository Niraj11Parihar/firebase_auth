import React, { useState } from "react";
import { signIn } from "../../context/AuthService"; // Firebase sign-in
import { Link } from "react-router-dom"; // For navigation

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    console.log("Login button clicked"); // Debugging line
    try {
      const user = await signIn(email, password);
      onLoginSuccess(user);
    } catch (error) {
      console.error("Login error:", error); // Catch and log errors
      alert(error.message);
    }
  };
  return (
    <div>
      <h2>Login Page</h2>
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
      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default Login;
