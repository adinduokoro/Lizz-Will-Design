import React from 'react'
import styles from "./About.module.css"
import { AboutText, SubPageHeader } from '../../components'

const About = () => {
  return (
    <div className={`${styles["about"]} webPage`}>
      <SubPageHeader
        title={"About Us"}
      />
      <AboutText />
    </div>
  )
}

export default About