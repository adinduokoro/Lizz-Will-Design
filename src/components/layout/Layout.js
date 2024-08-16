import React from "react";
import styles from "./Layout.module.css";
import { Navigation, Footer, Menu } from "../../components";
import { Outlet, useLocation } from "react-router-dom";
import video from "../../assets/hero-video.mp4";
import HomePageBackGroundOne from "../../assets/background/homePageBackgroundOne/HomePageBackGroundOne";
import OtherPageBackground from "../../assets/background/otherPageBackground/OtherPageBackground";

const Layout = () => {
  const location = useLocation();

  return (
    <div className={styles.layout}>
      <Menu />
      {location.pathname === "/" ? <HomePageBackGroundOne video={video} /> : <OtherPageBackground />}
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
