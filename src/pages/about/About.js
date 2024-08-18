import React from 'react'
import styles from "./About.module.css"
import { SubPageHeader } from '../../components'

const About = () => {
  return (
    <div className={`${styles["about"]} webPage`}>
      <SubPageHeader
        title={"About Us"}
      />
    </div>
  )
}

export default About