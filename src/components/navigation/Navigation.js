import React from "react";
import styles from "./Navigation.module.css";
import logo from "../../assets/liz-will-logo-short.svg";
import menuIcon from "../../assets/toggle-menu.svg";
import { navLinks } from "./data";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className={styles["navigation"]}>
      <div className={styles["logo-container"]}>
        <Link to="/">
          <img src={logo} alt="Lizz Will Design & Renovation Logo" />
        </Link>
      </div>
      <ul className={styles["navigation-links"]}>
        {navLinks.map((link, index) => (
          <li key={index} className={styles["nav-item"]}>
            {link.name}
          </li>
        ))}
      </ul>
      <img className={styles["toggle-menu"]} src={menuIcon} alt="toggle menu" />
    </nav>
  );
};

export default Navigation;
