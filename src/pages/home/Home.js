import React from 'react'
import styles from "./Home.module.css"
import { About, Cta, Featured, Hero, Quality, Services } from '../../components'

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Quality />
      <Services />
      <Featured />
      <Cta />
    </div>
  )
}

export default Home