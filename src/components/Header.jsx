import React from 'react';
import './Header.css'; // Import the CSS file

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>My Website</h1>
      </div>
      <nav>
        <ul className="nav-list">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href='/login'>Login</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;