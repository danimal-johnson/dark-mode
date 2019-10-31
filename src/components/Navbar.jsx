import React, { useState } from 'react';
// import { useLocalStorage } from '../hooks/useLocalStorage';
import { useDarkMode } from '../hooks/useDarkMode';

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = async e => {
    e.preventDefault();
    console.log("before", darkMode);
    await setDarkMode(!darkMode);
    console.log("after", darkMode);
  };

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
