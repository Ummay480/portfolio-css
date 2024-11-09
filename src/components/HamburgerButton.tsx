'use client';  // Ensures this component runs on the client-side

import React, { useState } from 'react';
import styles from './Hamburger.module.css';  // Import the CSS Module

const HamburgerButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);  // TypeScript state

  // Toggle the menu open/close
  const toggleMenu = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <button
      className={`${styles.hamburgerButton} ${isOpen ? styles.open : ''}`}  // Dynamically apply CSS classes
      onClick={toggleMenu}  // Click handler
      aria-expanded={isOpen ? 'true' : 'false'}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      {isOpen ? 'Close' : 'Open'} Menu
    </button>
  );
};

export default HamburgerButton;
