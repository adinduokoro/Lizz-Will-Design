import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles["footer"]}>
      <img src="" alt="" />
      <div className={styles["footer-container"]}>
        <div className={styles["top"]}>
          <div className={styles["left"]}>{/* company details */}</div>
          <div className={styles["right"]}>{/* form */}</div>
        </div>
        <div className={styles["bottom"]}>
          {/* copyright */}
          {/* social */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
