import linkedIn from "../../assets/ri_linkedin-fill.svg";
import twitter from "../../assets/mdi_twitter.svg";
import facebook from "../../assets/ri_facebook-fill.svg";
import instagram from "../../assets/mdi_instagram.svg";
import license from "../../assets/mdi_card-account-details.svg";
import phone from "../../assets/mdi_phone.svg";
import email from "../../assets/mdi_email.svg";

export const socialLinks = [
  { name: "linkedin", img: linkedIn },
  { name: "twitter", img: twitter },
  { name: "facebook", img: facebook },
  { name: "instagram", img: instagram },
];

export const contactDetails = [
  {
    name: "license",
    img: license,
    detail: "MHIC 01-157071",
    href: "javascript:void(0)",
    class: "disabled-link"
  },
  {
    name: "phone",
    img: phone,
    detail: "443-218-3344",
    href: "tel:+14432183344",
    class: ""

  },
  {
    name: "email",
    img: email,
    detail: "lizwilldesign@gmail.com",
    href: "mailto:lizwilldesign@gmail.com",
    class: ""
  },
];
