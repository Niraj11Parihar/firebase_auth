// src/components/Auth.jsx
import React, { useState } from 'react';
import { signUp } from '../../context/AuthService';
import { Link } from 'react-router-dom';  // For navigation

const Register = ({ onSignUpSuccess }) => {  // Accept onSignUpSuccess as a prop
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const user = await signUp(email, password);
      alert('Sign-up successful!');
      onSignUpSuccess(user);  // Trigger the function passed from parent (App.jsx)
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>Register</h2>
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
      <button onClick={handleSignUp}>Sign Up</button>
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default Register;
