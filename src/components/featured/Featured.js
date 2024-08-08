import React, { useState } from "react";
import styles from "./Featured.module.css";
import leftArrow from "../../assets/left-arrow.svg";
import rightArrow from "../../assets/right-arrow.svg";
import { Link } from "react-router-dom";

const images = [
  {
    src: "https://images.unsplash.com/photo-1465189684280-6a8fa9b19a7a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    src: "https://images.unsplash.com/uploads/1412026095116d2b0c90e/3bf33993?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "amet consectetur",
  },
  {
    src: "https://wallpapershome.com/images/pages/pic_h/23277.jpg",
    text: "Lorem ipsum dolor sit",
  },
  {
    src: "https://wallpapershome.com/images/pages/pic_h/12596.jpg",
    text: "Doloribus quo alias reprehenderit",
  },
  {
    src: "https://images.unsplash.com/photo-1508144753681-9986d4df99b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Reprehenderit",
  },
];

const Featured = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  const nextSlide = () => {
    setSliderIndex((nextIndex) => {
      const newIndex = nextIndex === images.length - 1 ? 0 : nextIndex + 1;
      return newIndex;
    });
    // setTimer(7); // reset timer
  };

  const prevSlide = () => {
    setSliderIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? images.length - 1 : prevIndex - 1;
      return newIndex;
    });
    // setTimer(7); // reset timer
  };

  return (
    <div className={styles["featured"]}>
      <div className={styles["featured-container"]}>
        <h2>Featured Projects</h2>
        <div className={styles["slideshow-container"]}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`${styles.slide} ${
                index === sliderIndex ? styles.showSlide : ""
              }`}
            >
              <img src={image.src} alt="slide" />
            </div>
          ))}
          <div className={styles.left} onClick={prevSlide}>
            <div className={styles["left-arrow"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 37 30"
                fill="none"
              >
                <path
                  d="M16.133 0.439901C16.2731 0.579202 16.3842 0.744626 16.46 0.926711C16.5358 1.1088 16.5748 1.30397 16.5748 1.50108C16.5748 1.69819 16.5358 1.89337 16.46 2.07545C16.3842 2.25754 16.2731 2.42296 16.133 2.56226L5.1443 13.5003L34.6527 13.5003C35.0523 13.5003 35.4355 13.6583 35.718 13.9396C36.0006 14.2209 36.1593 14.6024 36.1593 15.0002C36.1593 15.398 36.0006 15.7795 35.718 16.0608C35.4355 16.342 35.0523 16.5001 34.6527 16.5001L5.1443 16.5001L16.133 27.4381C16.4157 27.7195 16.5745 28.1012 16.5745 28.4993C16.5745 28.8973 16.4157 29.279 16.133 29.5604C15.8503 29.8419 15.4669 30 15.0671 30C14.6673 30 14.2838 29.8419 14.0012 29.5604L0.441861 16.0614C0.301784 15.9221 0.19066 15.7566 0.114842 15.5745C0.039024 15.3925 -6.51267e-07 15.1973 -6.59939e-07 15.0002C-6.68611e-07 14.8031 0.039024 14.6079 0.114842 14.4258C0.19066 14.2437 0.301784 14.0783 0.441861 13.939L14.0011 0.439901C14.1411 0.300445 14.3072 0.189815 14.4901 0.114333C14.673 0.0388521 14.8691 3.16896e-06 15.0671 3.16036e-06C15.2651 3.15176e-06 15.4611 0.038852 15.644 0.114333C15.8269 0.189815 15.9931 0.300445 16.133 0.439901Z"
                  fill="var(--whiteColor500)"
                />
              </svg>
            </div>
          </div>
          <div className={styles.right} onClick={nextSlide}>
            <div className={styles["right-arrow"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 37 30"
                fill="none"
              >
                <path
                  d="M20.867 0.439901C20.7269 0.579202 20.6158 0.744626 20.54 0.926711C20.4642 1.1088 20.4252 1.30397 20.4252 1.50108C20.4252 1.69819 20.4642 1.89337 20.54 2.07545C20.6158 2.25754 20.7269 2.42296 20.867 2.56226L31.8557 13.5003L2.3473 13.5003C1.94773 13.5003 1.56452 13.6583 1.28198 13.9396C0.99944 14.2209 0.84071 14.6024 0.84071 15.0002C0.84071 15.398 0.99944 15.7795 1.28198 16.0608C1.56452 16.342 1.94773 16.5001 2.3473 16.5001L31.8557 16.5001L20.867 27.4381C20.5843 27.7195 20.4255 28.1012 20.4255 28.4993C20.4255 28.8973 20.5843 29.279 20.867 29.5604C21.1497 29.8419 21.5331 30 21.9329 30C22.3327 30 22.7162 29.8419 22.9988 29.5604L36.5581 16.0614C36.6982 15.9221 36.8093 15.7566 36.8852 15.5745C36.961 15.3925 37 15.1973 37 15.0002C37 14.8031 36.961 14.6079 36.8852 14.4258C36.8093 14.2437 36.6982 14.0783 36.5581 13.939L22.9989 0.439901C22.8589 0.300445 22.6928 0.189815 22.5099 0.114333C22.327 0.0388521 22.1309 3.16896e-06 21.9329 3.16036e-06C21.7349 3.15176e-06 21.5389 0.038852 21.356 0.114333C21.1731 0.189815 21.0069 0.300445 20.867 0.439901Z"
                  fill="var(--whiteColor500)"
                />
              </svg>
            </div>
          </div>
        </div>
        <p>
          Our meticulous craftsmanship and keen attention to detail shine
          through in every project we undertake.
        </p>
        <Link to="portfolio">
          <button className={`primary-button-two`}>View Our Portfolio</button>
        </Link>
      </div>
    </div>
  );
};

export default Featured;
