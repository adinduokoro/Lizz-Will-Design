import React from 'react'
import styles from "./Portfolio.module.css"
import { SubPageHeader } from '../../components'

const Portfolio = () => {
  return (
    <div className={`${styles["portfolio"]} webPage`}>
      <SubPageHeader
        title={"Portfolio"}
        subTitle={"This is the portfolio page where you can reach me at anytime"}
      />
    </div>
  )
}

export default Portfolio