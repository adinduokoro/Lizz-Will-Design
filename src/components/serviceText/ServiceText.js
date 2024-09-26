<<<<<<< HEAD
import React from 'react'
import styles from "./ServiceText.module.css"
=======
import React from "react";
import styles from "./ServiceText.module.css";
import { services } from "./data";
import demoimg from "../../assets/demoimg.jpg"
>>>>>>> 3a8100d56815b1b4a1b39b10ddab2b63c9bb3463

const ServiceText = () => {
  return (
    <div className={styles["serviceText"]}>
      <div className={styles["serviceText-container"]}>
<<<<<<< HEAD
      <div className={styles["serviceText-content"]}>
        hello world
      </div>
      </div>
    </div>
  )
}

export default ServiceText
=======
        <h3 className={styles["header"]}>Our Services</h3>
        <div className={styles["content-top"]}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button>GET AN ESTIMATE</button>
        </div>
        <div className={styles["content-bottom"]}>
          {services.map((card, index) => (
            <div className={styles["card"]} key={index}>
              <span>{card.title}</span>
              <div className={styles["image-container"]}>
                <img src={demoimg} alt="" />
              </div>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceText;
>>>>>>> 3a8100d56815b1b4a1b39b10ddab2b63c9bb3463
