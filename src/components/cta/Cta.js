import React from "react";
import styles from "./Cta.module.css";
import SectionLink from "../sectionLink/SectionLink";

const Cta = () => {
  return (
    <div className={styles["cta"]}>
      <div className={styles["parallax-overlay"]}></div>
      <div className={styles["parallax"]}></div>
      <div className={styles["top"]}>
        <div className={styles["top-container"]}>
          <div className={styles["link-container"]}>
            <SectionLink text={"Contact Us"} />
          </div>
          <h2>Get in Touch</h2>
          <p>Remodeling & Design, Tailored to Your Vision</p>
        </div>
      </div>
      <div className={styles["bottom"]}>
        <h2>Thinking about a new project?</h2>
        <p>Feel free to say Hello...</p>
        <button className="secondary-button-two">Let's Talk</button>
      </div>
    </div>
  );
};

export default Cta;
