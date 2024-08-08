import React, { useState } from "react";
import styles from "./About.module.css";
import { aboutLinks } from "./data";
import { SectionLink } from "../../components";
import leftArrow from "../../assets/left-arrow.svg";
import rightArrow from "../../assets/right-arrow.svg";

const About = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles["about"]}>
      <div className={styles["about-container"]}>
        <div className={styles["link-container"]}>
          <SectionLink text={"About Us"} />
        </div>
        <h2>About Our Design Philosophy</h2>
        <div className={styles["about-content"]}>
          <div className={styles["content"]}>
            <ul className={styles["about-navigation-links"]}>
              {aboutLinks.map((link, index) => (
                <li key={index} onClick={() => setActiveTab(index)}>
                  <h3>{link.tab}</h3>
                </li>
              ))}
            </ul>
            <p>
              {/* 590 character count */}
              {aboutLinks[activeTab].text}
            </p>
          </div>
          <div className={styles["card-container"]}>
            <div className={styles["image-container"]}>
              {/* image */}
              {/* image */}
              {/* image */}
            </div>
            <div className={styles["card-container-buttons"]}>
              <div className={styles["view-box"]}>slides</div>
              <div className={styles["view-box-controls"]}>
                <img
                  className={styles["left-arrow"]}
                  src={leftArrow}
                  alt="left arrow"
                />
                <img
                  className={styles["right-arrow"]}
                  src={rightArrow}
                  alt="right arrow"
                />
              </div>
            </div>
          </div>
          <button className="primary-button-two">View our Portfolio</button>
        </div>
      </div>
    </div>
  );
};

export default About;
