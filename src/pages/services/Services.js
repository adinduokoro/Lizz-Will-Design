import React from 'react'
import styles from "./Services.module.css"
import { ServiceText, SubPageHeader } from '../../components'

const Services = () => {
  return (
    <div className={`${styles["services"]} webPage`}>
    <SubPageHeader
      title={"Our Services"}
    />
    <ServiceText />
  </div>
  )
}

export default Services