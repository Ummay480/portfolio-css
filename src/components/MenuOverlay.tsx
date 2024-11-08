"use client"
import React from "react";
import NavLink from "./NavLink";

interface LinkItem {
  title: string;
  path: string;
}

interface MenuOverlayProps {
  links: LinkItem[]; // This ensures links is an array of objects with title and path
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center z-30">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
