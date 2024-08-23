import React from 'react'
import styles from "./ContactForm.module.css"

const ContactForm = () => {
  return (
    <div className={styles["contact-form"]}>
      <div className={styles["contact-form-container"]}>
        <h3>Contact Lizz Will Design</h3>
        <div className={styles["contact-form-content"]}>

          <div className={styles["left"]}>
            <p>Starting your project today by calling or emailing us.</p>
            <h3>We're Experienced</h3>
            <div className={styles["address-info"]}>
              <p>PO Box 123</p>
              <p>Baltimore, MD 21236</p>
            </div>
            <div className={styles["contact-info"]}>
              <p>MHIC 01-157071</p>
              <p>443-218-3344</p>
              <p>lizwilldesign@gmail.com</p>
            </div>
          </div>
          <div className={styles["right"]}>
            <p>Or submit your information here:</p>
            <form action="">
              <div className={styles["row-one"]}>
                {/* name */}
                {/* email */}
              </div>
              <div className={styles["row-two"]}>
                {/* number */}
                {/* service */}
              </div>
              <div className={styles["row-three"]}>{/* text area */}</div>
              <div className={styles["row-four"]}>{/* button */}</div>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ContactForm