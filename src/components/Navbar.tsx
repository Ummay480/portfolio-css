'use client'; // Ensure this component is rendered client-side

import Link from 'next/link';
import React, { useState, useCallback } from 'react';
import NavLink from './NavLink';
import MenuOverlay from './MenuOverlay';
import HamburgerButton from './HamburgerButton'; // Import the HamburgerButton component
import styles from './Navbar.module.css';

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Projects', path: '/projects' },
  { title: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false); // Manage state of the navbar

  // Toggle navbar visibility
  const toggleNavbar = () => {
    setNavbarOpen((prevOpen) => !prevOpen);
  };

  // Close navbar (for example, when a link is clicked)
  const closeNavbar = () => setNavbarOpen(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.navbar__logo}>
          Ummay.K
        </Link>

        {/* Mobile hamburger button */}
        <HamburgerButton />

        {/* Navigation links for desktop */}
        <div className={styles.navLinks__desktop}>
          <ul className={styles.navLinks}>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} onClick={closeNavbar} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Overlay menu */}
      {navbarOpen && (
        <MenuOverlay
          links={navLinks.map((link) => ({
            title: link.title,
            path: link.path,
            onClick: closeNavbar,
          }))}
        />
      )}
    </nav>
  );
};

export default Navbar;
