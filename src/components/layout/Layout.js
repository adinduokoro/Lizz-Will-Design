import React from "react";
import styles from "./Layout.module.css";
import { Navigation, Footer, Menu } from "../../components";
import { Outlet, useLocation } from "react-router-dom";
import video from "../../assets/hero-video.mp4";
import HomePageBackGroundOne from "../../assets/background/homePageBackgroundOne/HomePageBackGroundOne";
import PageBackground from "../../assets/background/pageBackground/PageBackground";
import aboutBackground from "../../assets/about-background.jpg"
import servicesBackground from "../../assets/services-background.jpg"
import portfolioBackground from "../../assets/portfolio-background.jpg"
import blogBackground from "../../assets/blog-background.jpg"
import contactBackground from "../../assets/contact-background.jpg"


const Layout = () => {
  const location = useLocation();

  const renderBackground = () => {
    switch (location.pathname) {
      case "/":
        return <HomePageBackGroundOne video={video} />;
      case "/about":
        return <PageBackground image={aboutBackground} name={"about"} />;
      case "/services":
        return <PageBackground image={servicesBackground} name={"services"} />;
      case "/portfolio":
        return <PageBackground image={portfolioBackground} name={"portfolio"} />;
      case "/blog":
        return <PageBackground image={blogBackground} name={"blog"} />;
      case "/contact":
        return <PageBackground image={contactBackground} name={"contact"} />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.layout}>
      <Menu />
      {renderBackground()}
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
