import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles["hero"]}>
      <div className={styles["hero-container"]}>
        <div className={styles["hero-cta"]}>
          <h1>
            Designing homes to perfectly match your <span>Dreams.</span>
          </h1>
          <p>
            General Contracting, Handyman Services, Painting & Drywall, Kitchen
            & Bath Renovations, and So Much More
          </p>
          <div className={styles["cta-buttons"]}>
            <button className="secondary-button-one">GET A QUOTE</button>
            <button className="primary-button-one">SEE SERVICES</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
