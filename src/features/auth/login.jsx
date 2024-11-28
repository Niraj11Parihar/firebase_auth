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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
      
      {/* Email Input */}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      
      {/* Password Input */}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-3 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      
      {/* Login Button */}
      <button
        onClick={handleLogin}
        className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Login
      </button>
      
      {/* Register Link */}
      <p className="mt-6 text-center text-gray-600">
        Don't have an account?{' '}
        <Link to="/register" className="text-blue-500 hover:underline">
          Register here
        </Link>
      </p>
    </div>
  </div>
  );
};

export default Login;
