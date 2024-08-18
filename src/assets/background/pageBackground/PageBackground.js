import React from 'react'
import styles from "./PageBackground.module.css"

const PageBackground = ({ image, name }) => {
  return (
    <div className={styles["page-background"]}>
        <div className={styles["background-overlay"]}></div>
        <div className={styles["image-container"]}>
            <img src={image} alt={name} />
        </div>
    </div>
  )
}

export default PageBackground