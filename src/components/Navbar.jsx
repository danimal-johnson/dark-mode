import React, { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleMode = e => {
    const element = document.getElementById("App");
    e.preventDefault();
    setDarkMode(!darkMode);
    console.log(darkMode);
    // if (darkMode) {
      element.classList.toggle("dark-mode");
    // } else {
    //   element.classList.remove("dark-mode");
    // }
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
