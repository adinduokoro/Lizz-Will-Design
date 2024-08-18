import React from 'react'
import styles from "./Portfolio.module.css"
import { SubPageHeader } from '../../components'

const Portfolio = () => {
  return (
    <div className={`${styles["portfolio"]} webPage`}>
      <SubPageHeader
        title={"Portfolio"}
      />
    </div>
  )
}

export default Portfolio