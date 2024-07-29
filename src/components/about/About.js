import React from "react";
import styles from "./About.module.css";
import { aboutLinks } from "./data";

const About = () => {
  return (
    <div className={styles["about"]}>
      <div className={styles["about-container"]}>
        <span>About</span>
        <h2>About Our Design Philosophy</h2>
        <div className={styles["about-content"]}>
          <ul className={styles["about-navigation-links"]}>
            {aboutLinks.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vesti
            bcursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh
            elementum imperdiet. Duis sagm dolor sit amet, consectetur
            adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante
            dapibus diam. Sed nisi. Nulla quis sem.
          </p>
          <div className={styles["card-container"]}>
            <div className={styles["image-container"]}>
              {/* image */}
              {/* image */}
              {/* image */}
            </div>
            <div className={styles["card-container-buttons"]}>
              {/* left */}
              {/* right */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
