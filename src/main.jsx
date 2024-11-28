import React from 'react';
import ReactDOM from 'react-dom/client'; // Using React 18+ root API
import './index.css'; // Optional: for any global CSS you want
import App from './App'; // Import your main App component

// Create a root for the app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component into the root div
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
