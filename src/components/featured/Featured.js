import React from "react";
import styles from "./Featured.module.css";

const Featured = () => {
  return (
    <div className={styles["featured"]}>
      <div className={styles["featured-container"]}>
        <h2>Featured Projects</h2>
        <div className={styles["slideshow-container"]}>
          {/* left button */}
          {/* slide */}
          {/* right button */}
        </div>
        <p>
          Our meticulous craftsmanship and keen attention to detail shine
          through in every project we undertake.
        </p>
        <button className={`primary-button-one`}>
          View Our Portfolio
        </button>
      </div>
    </div>
  );
};

export default Featured;
