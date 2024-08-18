import React from "react";
import styles from "./SubPageHeader.module.css";

const SubPageHeader = ({ title, subTitle }) => {
  return (
    <div className={styles.header}>
      <div className={styles["header-container"]}>
        <h1>{title}</h1>
        <p>{subTitle}</p>
      </div>
    </div>
  );
};

export default SubPageHeader;
