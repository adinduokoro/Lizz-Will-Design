import React from "react";
import styles from "./Footer.module.css";
import { contactDetails, socialLinks } from "./data";
import logo from "../../assets/clean-logo.svg";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className={styles["footer"]}>
      <img src="" alt="" />
      <div className={styles["footer-container"]}>
        <div className={styles["top"]}>
          <div className={styles["left"]}>
            <img src={logo} alt="" />
            <div className={styles["address"]}>
              <span>PO Box 123</span>
              <span>Baltimore, MD 21236</span>
            </div>
            <div className={styles["contacts"]}>
              {contactDetails.map((contact, index) => (
                <div className={styles["contact"]} key={index}>
                  <img src={contact.img} alt={contact.name} />
                  <span>{contact.detail}</span>
                </div>
              ))}
            </div>
          </div>
          <form className={styles["right"]}>
            <div className={styles["colOne"]}>
              <span>Let’s get started! Complete the following form:</span>
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
              <button>SUBMIT</button>
            </div>
            <div className={styles["colTwo"]}>
              <textarea type="text" placeholder="How can we help you?" />
            </div>
          </form>
        </div>
        <div className={styles["bottom"]}>
          <div className={styles["copyright"]}>
            © {year} Lizz Will Design & Renovation. All rights reserved. Created
            by <span>Byte Back Digital.</span>
          </div>
          <div className={styles["social-media-icons"]}>
            {socialLinks.map((social, index) => (
              <div className={styles["social-icon"]} key={index}>
                <img src={social.img} alt={social.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
