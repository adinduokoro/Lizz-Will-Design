import React, { useEffect, useRef } from "react";
import styles from "./Hero.module.css";
import Typed from "typed.js";
import { Link } from "react-router-dom";

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Dream", "Vision", "Imagination", "Aspirations", "Personality"],
      typeSpeed: 200,
      backSpeed: 75,
      backDelay: 2700,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className={styles["hero"]}>
      <div className={styles["hero-container"]}>
        <div className={styles["hero-cta"]}>
          <h1>
            Designing homes to perfectly match your <span ref={el}></span>
          </h1>
          <p>
            General Contracting, Handyman Services, Painting & Drywall, Kitchen
            & Bath Renovations, and So Much More
          </p>
          <div className={styles["cta-buttons"]}>
            <Link to="contact">
              <button className="primary-button-one">GET A QUOTE</button>
            </Link>
            <Link to="services">
              <button className="secondary-button-one">SEE SERVICES</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
