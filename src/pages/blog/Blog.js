import React from 'react'
import styles from "./Blog.module.css"
import { SubPageHeader } from '../../components'

const Blog = () => {
  return (
    <div className={`${styles["blog"]} webPage`}>
      <SubPageHeader
        title={"Blog"}
        subTitle={"This is the blog page where you can reach me at anytime"}
      />
    </div>
  )
}

export default Blog