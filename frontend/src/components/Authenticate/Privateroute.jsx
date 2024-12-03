import React from 'react';
import { Navigate } from 'react-router-dom';

const Privateroute = ({ children }) => {
  const token = localStorage.getItem('token');
  const isAuthenticated = token ? true : false;

  // Decode token to check if the user is an admin
  if (!isAuthenticated) {
    return <Navigate to="/auth" />;
  }

  const decoded = JSON.parse(atob(token.split('.')[1]));
  if (decoded.role !== 'admin') {
    return <Navigate to="/home" />; // Redirect to home if not admin
  }

  return children; // Render the protected route
};

export default Privateroute;
