import React from "react";
import styles from "./Contact.module.css";
import { SubPageHeader } from "../../components";

const Contact = () => {
  return (
    <div className={`${styles["contact"]} webPage`}>
      <SubPageHeader
        title={"Contact Us"}
        subTitle={"This is the contact page where you can reach me at anytime"}
      />
    </div>
  );
};

export default Contact;
