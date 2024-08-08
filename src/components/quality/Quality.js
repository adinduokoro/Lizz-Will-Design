import React from "react";
import styles from "./Quality.module.css";
import { cards } from "./data";

const Quality = () => {
  return (
    <div className={styles["quality"]}>
      <div className={styles["quality-container"]}>
        {cards.map((card, index) => (
          <div className={styles["card"]} key={index}>
            <div className={styles["image-container"]}>
              <img src={card.img} alt="" />
            </div>
            <div className={styles["title"]}>
              <h3>{card.title}</h3>
            </div>
            <div className={styles["description"]}>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quality;
