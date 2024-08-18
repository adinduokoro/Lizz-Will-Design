import React from 'react'
import styles from "./Home.module.css"
import { About, Cta, Featured, Hero, Quality, Services } from '../../components'

const Home = () => {
  return (
    <div className={`${styles["home"]} webPage`}>
      <Hero />
      <About />
      <div className={styles["quality"]}>
      <Quality />
      </div>
      <Services />
      <Featured />
      <Cta />
    </div>
  )
}

export default Home