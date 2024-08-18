import React from 'react'
import styles from "./About.module.css"
import { SubPageHeader } from '../../components'

const About = () => {
  return (
    <div className={`${styles["about"]} webPage`}>
      <SubPageHeader
        title={"About Us"}
        subTitle={"This is the about page where you can reach me at anytime"}
      />
    </div>
  )
}

export default About