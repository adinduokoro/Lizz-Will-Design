import React, { useEffect, useRef } from "react";
import styles from "./Cta.module.css";
import SectionLink from "../sectionLink/SectionLink";
import { Link } from "react-router-dom";
import Typed from "typed.js";


const Cta = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Hello...", "Hola...", "Nǐ hǎo...", "Bonjour..."],
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
    <div className={styles["cta"]}>
      <div className={styles["parallax-overlay"]}></div>
      <div className={styles["parallax"]}></div>
      <div className={styles["top"]}>
        <div className={styles["top-container"]}>
          <div className={styles["link-container"]}>
            <Link to="contact">
              <SectionLink text={"Contact Us"} />
            </Link>
          </div>
          <h2>Get in Touch</h2>
          <p>Remodeling & Design, Tailored to Your Vision</p>
        </div>
      </div>
      <div className={styles["bottom"]}>
        <h2>Thinking about a new project?</h2>
        <p>Feel free to say <span ref={el}></span></p>
        <Link to="contact">
        <button className="secondary-button-two">Let's Talk</button>
        </Link>
      </div>
    </div>
  );
};

export default Cta;
