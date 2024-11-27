"use client";
import React from "react";
import NavLink from "./NavLink";
import styles from "../styles/MenuOverlay.module.css"; // Import the CSS module

interface LinkItem {
  title: string;
  path: string;
}

interface MenuOverlayProps {
  links: LinkItem[]; // This ensures links is an array of objects with title and path
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ links }) => {
  return (
    <ul className={styles.overlayContainer}>
      {links.map((link, index) => (
        <li key={index} className={styles.overlayLink}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;