import React from "react";
import styles from "./Navigation.module.css";
import logo from "../../assets/liz-will-logo-short.svg";
import menuIcon from "../../assets/toggle-menu.svg";
import { navLinks } from "./data";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectIsMenuOpen, SET_MENU_TOGGLE } from "../../redux/slice/menuSlice";

const Navigation = () => {
  const dispatch = useDispatch()
  const isMenuOpen = useSelector(selectIsMenuOpen)

  const toggleMenu = () => {
    dispatch(SET_MENU_TOGGLE(!isMenuOpen))
  };

  const closeMenu = () => {
    dispatch(SET_MENU_TOGGLE(false));
  };

  return (
    <nav className={styles["navigation"]}>
      <div className={styles["logo-container"]}>
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="Lizz Will Design & Renovation Logo" />
        </Link>
      </div>
      <ul className={styles["navigation-links"]}>
        {navLinks.map((link, index) => (
          <Link to={link.path} onClick={closeMenu}>
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
