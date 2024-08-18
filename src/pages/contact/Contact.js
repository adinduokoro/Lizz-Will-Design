import React from "react";
import styles from "./Contact.module.css";
import { SubPageHeader } from "../../components";

const Contact = () => {
  return (
    <div className={`${styles["contact"]} webPage`}>
      <SubPageHeader
        title={"Contact Us"}
      />
    </div>
  );
};

export default Contact;
