import React from "react";
import styles from "./Footer.module.css";
import { contactDetails, socialLinks } from "./data";
import logo from "../../assets/liz-will-logo-short.svg";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  const location = useLocation();

  return (
    <footer
      className={`${styles["footer"]} ${
        location.pathname !== "/contact" ? null : styles["footer-top-hide"]
      }`}
    >
      <div className={styles["footer-container"]}>
        {location.pathname !== "/contact" && (
          <div className={styles["top"]}>
            <div className={styles.left}>
              <img className={styles["footer-logo"]} src={logo} alt="" />
              <div className={styles["address"]}>
                <span>PO Box 123</span>
                <span>Baltimore, MD 21236</span>
              </div>
              <div className={styles["contacts"]}>
                {contactDetails.map((contact, index) => (
                  <a href={contact.href} className={contact.class}>
                    <div className={styles["contact"]} key={index}>
                      <img src={contact.img} alt={contact.name} />
                      <span>{contact.detail}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <div className={styles.right}>
              <form>
                <span>Let’s get started! Complete the following form:</span>
                <div className={styles["form-inputs"]}>
                  <div className={styles["main-inputs"]}>
                    <input
                      className={styles["name"]}
                      type="name"
                      placeholder="Name"
                    />
                    <input
                      className={styles["email"]}
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className={styles["secondary-input"]}>
                    <textarea type="text" placeholder="How can we help you?" />
                  </div>
                </div>
                <button>SUBMIT</button>
              </form>
            </div>
          </div>
        )}
        <div className={`${styles["bottom"]} ${location.pathname !== "/contact" ? null : styles["bottom-trim"] }`}>
          <div className={styles["copyright"]}>
            © {year} Lizz Will Design & Renovation. All rights reserved. Created
            by
            <a
              href="https://bytebackdigital.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span> Byte Back Digital.</span>
            </a>
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
