import React from "react";
import styles from "./Layout.module.css";
import { Navigation, Footer } from "../../components";
import { Outlet, useLocation } from "react-router-dom";
import video from "../../assets/hero-video.mp4";

const Layout = () => {
  const location = useLocation();

  return (
    <div className={styles.layout}>
      {location.pathname === "/" && (
        <div className={styles["hero-background-image"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1920"
            height="1199"
            viewBox="0 0 1920 1199"
            fill="none"
          >
            <defs>
              <clipPath id="clipPath">
                <path d="M1920 1025.84L0 1199V0H1920V1025.84Z" />
              </clipPath>
            </defs>
            <foreignObject x="0" y="0" width="1920" height="1199">
              <div
                xmlns="http://www.w3.org/1999/xhtml"
                className={styles.videoContainer}
              >
                <div className={styles.gradientOverlay}></div>
                <video className={styles.video} pause muted loop>
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </foreignObject>
          </svg>
        </div>
      )}
      {/* <Navigation />
      <Outlet />
      <Footer /> */}
    </div>
  );
};

export default Layout;
