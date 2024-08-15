import React from "react";
import styles from "./Menu.module.css";
import closeIcon from "../../assets/close-icon.svg";
import closeIconWhite from "../../assets/close-icon-white.svg";
import headerIcon from "../../assets/header-img-icon.svg";
import { socialLinks } from "./data";
import { useSelector, useDispatch } from "react-redux";
import { selectIsMenuOpen, SET_MENU_TOGGLE } from "../../redux/slice/menuSlice";
import { contactDetails } from "./data";
import marker from "../../assets/carbon_location-filled-orange.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { navLinks } from "../navigation/data";
import mobileLogo from "../../assets/mobile-menu-logo.svg";
import indent from "../../assets/star-vector.svg";
import planeIcon from "../../assets/button-icon.svg";

const Menu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isMenuOpen = useSelector(selectIsMenuOpen);

  const closeMenu = () => {
    dispatch(SET_MENU_TOGGLE(false));
  };

  const handleClick = () => {
    navigate("/about");
    dispatch(SET_MENU_TOGGLE(false));
  };

  return (
    <div className={styles["desktop-and-mobile-menus"]}>
      <div
        className={`${styles["menu-overlay"]} ${
          isMenuOpen ? styles["overlay-active"] : ""
        }`}
        onClick={closeMenu}
      ></div>
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
          <button className="primary-button-one" onClick={handleClick}>
            Learn More
          </button>
          <div className={styles["mobile-header"]}>
            <img src={headerIcon} alt="header icon" />
            <h3>Contact Info</h3>
          </div>
          <div className={styles["contact-details"]}>
            <div className={styles["address"]}>
              <img src={marker} alt="location" />
              <div className={styles["address-details"]}>
                <span>P.O. BOX 123</span>
                <span>Baltimore, MD 21236</span>
              </div>
            </div>
            {contactDetails.map((contact, index) => (
              <a href={contact.href} target="_blank" rel="noopener noreferrer">
                <div className={styles["contact"]} key={index}>
                  <img src={contact.img} alt={contact.name} />
                  <p>{contact.detail}</p>
                </div>
              </a>
            ))}
          </div>
          <div className={styles["social-icons"]}>
            {socialLinks.map((icon, index) => (
              <a href={icon.href} target="_blank" rel="noopener noreferrer">
                <div className={styles["icon"]} key={index}>
                  <img src={icon.img} alt={icon.name} />
                </div>
              </a>
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

      <div
        className={`${styles["mobile-mobile-menu"]} ${
          isMenuOpen ? styles["active"] : ""
        }`}
      >
        <div className={styles["mobile-close-container"]}>
          <img src={closeIconWhite} onClick={closeMenu} alt="close icon" />
        </div>
        <div className={styles["logo-container"]}>
          <img src={mobileLogo} alt="" />
        </div>
        <div className={styles["mobile-nav-menu"]}>
          {navLinks.map((link, index) => (
            <Link to={link.path} onClick={closeMenu}>
            <li key={index}>
              <span>{link.name}</span>
              <img src={indent} alt="" />
            </li>
            </Link>
          ))}
        </div>
        <form className={styles["mobile-newsletter"]}>
          <div className={styles["newsletter-description"]}>
            <span>Join Our Newsletter</span>
            <span>
              Stay ahead with the latest updates and exclusive offers.
            </span>
          </div>
          <form className={styles["newsletter-input"]}>
            <input type="text" placeholder="Your email address" />
            <button>
              <img src={planeIcon} alt="" />
            </button>
          </form>
        </form>
      </div>
    </div>
  );
};

export default Menu;
