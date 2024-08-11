import React, { useState } from "react";
import styles from "./Navigation.module.css";
import logo from "../../assets/liz-will-logo-short.svg";
import menuIcon from "../../assets/toggle-menu.svg";
import { navLinks } from "./data";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles["navigation"]}>
      <div className={styles["logo-container"]}>
        <Link to="/">
          <img src={logo} alt="Lizz Will Design & Renovation Logo" />
        </Link>
      </div>
      <ul className={styles["navigation-links"]}>
        {navLinks.map((link, index) => (
          <Link to={link.path}>
            <li key={index} className={styles["nav-item"]}>
              {link.name}
            </li>
          </Link>
        ))}
      </ul>
      <img
        className={styles["toggle-menu"]}
        src={menuIcon}
        alt="toggle menu"
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navigation;
