import React from 'react'
import styles from "./Services.module.css"
import { SubPageHeader } from '../../components'

const Services = () => {
  return (
    <div className={`${styles["services"]} webPage`}>
    <SubPageHeader
      title={"Our Services"}
    />
  </div>
  )
}

export default Services