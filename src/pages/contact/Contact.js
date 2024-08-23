import React from "react";
import styles from "./Contact.module.css";
import { ContactForm, SubPageHeader } from "../../components";

const Contact = () => {
  return (
    <div className={`${styles["contact"]} webPage`}>
      <SubPageHeader
        title={"Contact Us"}
      />
      <ContactForm />
    </div>
  );
};

export default Contact;
