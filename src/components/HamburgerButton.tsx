"use client"
import React from 'react';
import styles from '../styles/Hamburger.module.css'; // Ensure the correct path for CSS

interface HamburgerButtonProps {
  onClick: () => void; // Ensure `onClick` is defined as a required prop
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({ onClick }) => {
  return (
    <button className={styles.hamburgerButton} onClick={onClick}>
      ☰ {/* Hamburger icon */}
    </button>
  );
};

export default HamburgerButton;
