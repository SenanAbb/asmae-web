import styles from "./ContactSection.module.scss";
import icons from "../../assetsRoutes/icons";
import useTranslation from "next-translate/useTranslation";
import lorem from "../../utils/lorem";
import ContactForm from "../ContactForm";
import React, { ForwardedRef } from "react";
import Image from "next/image";

const ContactSection = React.forwardRef(
  (props, ref: ForwardedRef<HTMLElement>) => {
    const { t } = useTranslation();

    return (
      <section className={styles.contact_section} id="contact" ref={ref}>
        <div className={styles.left_section}>
          <h1>{t("home:contact_title")}</h1>
          <p>{t("home:contact_description")}</p>
          <div className={styles.info}>
            <div className={styles.info_telephone}>
              <Image
                src={icons.telephone}
                alt="Telephone icon"
                width={50}
                height={50}
              />
              <span>{t("home:telephone")}</span>
            </div>
            <div className={styles.info_email}>
              <Image
                src={icons.email}
                alt="Telephone icon"
                width={50}
                height={50}
              />
              <span>{t("home:email")}</span>
            </div>
            <div className={styles.info_email}>
              <Image 
                src={icons.location}
                alt="Location icon"
                width={50}
                height={50}
              />
              <span>{t("home:location")}</span>
            </div>
          </div>
        </div>
        <div className={styles.separator_container}>
          <div className={styles.separator}></div>
        </div>
        <div className={styles.right_section}>
          <h3>{t("home:contact_form_title")}</h3>
          <ContactForm />
        </div>
      </section>
    );
  }
);

export default ContactSection;
