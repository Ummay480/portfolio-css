import Link from "next/link";
import styles from "./NavLink.module.css";

interface NavLinkProps {
  href: string;
  title: string;
  className?: string; // Optional for additional styling
  onClick?: () => void; // Optional for handling click events
}

const NavLink: React.FC<NavLinkProps> = ({ href, title, className = "", onClick }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${styles.navlink} ${className} ${className.includes("md") ? styles.navlinkMd : ""}`}
    >
      {title}
    </Link>
  );
};

export default NavLink;
