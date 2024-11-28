import React, { useState } from 'react';
import { logOut } from '../context/AuthService'; // Your logout function

const Navbar = ({ user, onLogout }) => {
  const [showProfile, setShowProfile] = useState(false);

  const handleLogout = async () => {
    try {
      await logOut();
      onLogout();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center">
      <h1 className="text-white text-2xl font-bold"></h1>
      
      {user && (
        <div className="relative">
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="text-white px-4 py-2 bg-blue-800 rounded hover:bg-blue-700"
          >
            Profile
          </button>

          {/* Profile Card */}
          {showProfile && (
            <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4">
              <h2 className="text-lg font-semibold">User Details</h2>
              <p className="mt-2"><strong>Email:</strong> {user.email}</p>
              <button
                onClick={handleLogout}
                className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
