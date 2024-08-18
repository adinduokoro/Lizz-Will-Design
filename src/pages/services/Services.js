import React from 'react'
import styles from "./Services.module.css"
import { SubPageHeader } from '../../components'

const Services = () => {
  return (
    <div className={`${styles["services"]} webPage`}>
    <SubPageHeader
      title={"Our Services"}
      subTitle={"This is the service page where you can reach me at anytime"}
    />
  </div>
  )
}

export default Services