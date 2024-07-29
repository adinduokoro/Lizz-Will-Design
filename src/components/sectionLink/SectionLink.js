import React from "react";
import styles from "./SectionLink.module.css";
import diagonalArrow from "../../assets/diagonal-arrow.svg";

const SectionLink = ({ text }) => {
  return (
    <>
      <div className={styles["section-link"]}>
        <div className={styles["page-link"]}>
          <>
            <span className={styles["text"]}>{text}</span>
            <span className={styles["underline"]}></span>
          </>
        </div>
        <img
          className={styles["diagonal-arrow"]}
          src={diagonalArrow}
          alt="diagonal arrow"
        />
      </div>
    </>
  );
};

export default SectionLink;
