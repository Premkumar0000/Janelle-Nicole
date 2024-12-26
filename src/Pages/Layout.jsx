// src/Pages/Layout.js
import React from 'react';
const Layout = ({ children }) => {
  return (
    <div>
      <h1 className="Title">janelle Carothers</h1>
      <h2 className="sub">Costume Designer + Stylist</h2>
      <div>{children}</div>
    </div>
  );
};

export default Layout;