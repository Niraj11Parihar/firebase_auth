import React from 'react';
import { logOut } from '../context/AuthService'; // Import the logOut function

const Home = ({ user, onLogout }) => {
  const handleLogout = async () => {
    try {
      await logOut(); // Logout using Firebase
      onLogout(); // Call the callback to update the state
    } catch (error) {
      alert('Logout failed: ' + error.message); // Handle potential errors
    }
  };

  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <p>User Email: {user?.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
