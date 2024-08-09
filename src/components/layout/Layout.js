import React from "react";
import styles from "./Layout.module.css";
import { Navigation, Footer } from "../../components";
import { Outlet, useLocation } from "react-router-dom";
import video from "../../assets/hero-video.mp4";
import HomePageBackGroundOne from "../../assets/background/homePageBackgroundOne/HomePageBackGroundOne";

const Layout = () => {
  const location = useLocation();

  return (
    <div className={styles.layout}>
      {location.pathname === "/" && (
        <HomePageBackGroundOne video={video} />
      )}
      <Navigation/>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
