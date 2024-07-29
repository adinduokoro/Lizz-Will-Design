import React from "react";
import styles from "./HomePageBackGroundOne.module.css"

const HomePageBackGroundOne = ({video}) => {
  return (
    <div className={styles["home-page-background-one"]}>
      <div className={styles["video-container"]}>
        <div className={styles["background-one-overlay"]}></div>
        <video className={styles["video"]} autoPlay muted loop>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HomePageBackGroundOne;
