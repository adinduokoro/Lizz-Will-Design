import React from "react";
import styles from "./Navigation.module.css";
import logo from "../../assets/liz-will-logo.svg";
import menuIcon from "../../assets/toggle-menu.svg";
import { navLinks } from "./data";

const Navigation = () => {
  return (
    <nav className={styles["navigation"]}>
      <div className={styles["logo-container"]}>
        <img src={logo} alt="Lizz Will Design & Renovation Logo" />
      </div>
      <ul className={styles["navigation-links"]}>
        {navLinks.map((link, index) => (
          <li key={index}>{link.name}</li>
        ))}
      </ul>
      <img className={styles["toggle-menu"]} src={menuIcon} alt="toggle menu" />
    </nav>
  );
};

export default Navigation;
