import React from 'react'
import styles from "./Blog.module.css"
import { SubPageHeader } from '../../components'

const Blog = () => {
  return (
    <div className={`${styles["blog"]} webPage`}>
      <SubPageHeader
        title={"Blog"}
      />
    </div>
  )
}

export default Blog