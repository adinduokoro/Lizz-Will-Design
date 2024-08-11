import React from "react";
import styles from "./DesktopMenu.module.css";
import closeIcon from "../../assets/close-icon.svg";
import headerIcon from "../../assets/header-img-icon.svg";
import { socialLinks } from "./data";
import { useSelector, useDispatch } from "react-redux";
import { selectIsMenuOpen, SET_MENU_TOGGLE } from "../../redux/slice/menuSlice";

const DesktopMenu = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(selectIsMenuOpen);

  const closeMenu = () => {
    dispatch(SET_MENU_TOGGLE(false));
  };

  return (
    <div
      className={`${styles["desktop-mobile-menu"]} ${
        isMenuOpen ? styles["active"] : ""
      }`}
    >
      <div className={styles["close-container"]}>
        <img src={closeIcon} onClick={closeMenu} alt="close icon" />
      </div>
      <div className={styles["desktop-menu-container"]}>
        <div className={styles["mobile-header"]}>
          <img src={headerIcon} alt="header icon" />
          <h3>About Us</h3>
        </div>
        <div className={styles["about-image-container"]}>img</div>
        <p>
          Lorem Ipsum is simply dummy text of tting and typesetting industry.
        </p>
        <button className="primary-button-one">Learn More</button>
        <div className={styles["mobile-header"]}>
          <img src={headerIcon} alt="header icon" />
          <h3>Contact Info</h3>
        </div>
        {/* icon address */}
        {/* icon phone */}
        {/* icon email */}
        <div className={styles["social-icons"]}>
          {socialLinks.map((icon, index) => (
            <div className={styles["icon"]} key={index}>
              <img src={icon.img} alt={icon.name} />
            </div>
          ))}
        </div>
        <div className={styles["image-container"]}>img</div>
        <div className={styles["image-description"]}>
          <h3>Do You Need Any Help?</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is
            Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is and typesetting
            industry the printing .
          </p>
        </div>
      </div>
    </div>
  );
};

export default DesktopMenu;
