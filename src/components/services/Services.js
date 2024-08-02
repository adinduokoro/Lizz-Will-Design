import React from "react";
import styles from "./Service.module.css";
import { cards } from "./data";
import backgroundImage from "../../assets/homeBackgroundTwo.png";

const Services = () => {
  return (
    <div className={styles["service"]}>
      <div className={styles["background-container"]}>
        <div className={styles["background-overlay"]}></div>
        <img src={backgroundImage} alt="background" />
      </div>
      <div className={styles["service-container"]}>
        <h2>Explore Our Key Services and More</h2>
        <div className={styles["service-content"]}>
          <div className={styles["description"]}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa. Vestiem at nibh elementum imperdiet. Duis sagittis ipsum.{" "}
            </p>
            <button className="primary-button-one">SEE SERVICES</button>
          </div>
          <div className={styles["mobile-tags"]}>
            {cards.map((card, index) => (
              <div className={styles["tag"]} key={index}>
                <p>{card.title}</p>
              </div>
            ))}
          </div>
          <div className={styles["cards"]}>
            {cards.map((card, index) => (
              <div className={styles["card"]} key={index}>
                <div className={styles["top"]}>{card.img}top</div>
                <div className={styles["bottom"]}>
                  <p>{card.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
