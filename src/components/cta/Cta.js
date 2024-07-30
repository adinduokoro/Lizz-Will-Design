import React from "react";
import styles from "./Cta.module.css";
import background from "../../assets/cta-background.png";

const Cta = () => {
  return (
    <div className={styles["cta"]}>
      <img src={background} alt="" />

    </div>
  );
};

export default Cta;
