import useTranslation from "next-translate/useTranslation";
import { useEffect, useState } from "react";
import Button from "../Button";
import styles from "./ContactForm.module.scss";
import { emailValidation } from "../../utils/validations";

const ContactForm = () => {
  const { t } = useTranslation();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [errors, setErrors] = useState<string[]>([]);

  const handleFormDataChange = (e: any) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        value !== ""
          ? setErrors(errors.filter((error) => error !== "name"))
          : setErrors([...errors, "name"]);
        break;
      case "email":
        setEmail(value);
        !emailValidation(value) || value === ""
          ? setErrors([...errors, "email"])
          : setErrors(errors.filter((error) => error !== "email"));
        break;
      case "phone":
        setPhone(value);
        value !== ""
          ? setErrors(errors.filter((error) => error !== "phone"))
          : setErrors([...errors, "phone"]);
        break;
      case "message":
        setMessage(value);
        value !== ""
          ? setErrors(errors.filter((error) => error !== "message"))
          : setErrors([...errors, "message"]);
        break;
      default:
        break;
    }
  };

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    await fetch("/api/sendgrid", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        setLoading(false);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setSuccess(true);
      } else {
        setLoading(false);
        setErrors([...errors, "fetch_error"]);
        setInterval(() => {
          setErrors(errors.filter((error) => error !== "fetch_error"));
          setSuccess(false);
        }, 5000);
      }
    });
  };

  return (
    <form className={styles.container}>
      <div className={styles.input_container}>
        <input
          type="text"
          placeholder={t("common:contact_form_name_placeholder")}
          value={name}
          name="name"
          onChange={handleFormDataChange}
          style={errors.includes("name") ? { border: "1px solid red" } : {}}
        />
        {errors.includes("name") && (
          <span className={styles.error}>{t("common:input_error_name")}</span>
        )}
      </div>
      <div className={styles.input_container}>
        <input
          type="email"
          placeholder={t("common:contact_form_email_placeholder")}
          value={email}
          name="email"
          onChange={handleFormDataChange}
          style={errors.includes("email") ? { border: "1px solid red" } : {}}
        />
        {errors.includes("email") && (
          <span className={styles.error}>{t("common:input_error_email")}</span>
        )}
      </div>
      <div className={styles.input_container}>
        <input
          type="number"
          placeholder={t("common:contact_form_phone_placeholder")}
          value={phone}
          name="phone"
          onChange={handleFormDataChange}
          style={errors.includes("phone") ? { border: "1px solid red" } : {}}
        />
        {errors.includes("phone") && (
          <span className={styles.error}>{t("common:input_error_phone")}</span>
        )}
      </div>
      <div className={styles.input_container}>
        <textarea
          placeholder={t("common:contact_form_message_placeholder")}
          value={message}
          name="message"
          onChange={handleFormDataChange}
          style={errors.includes("message") ? { border: "1px solid red" } : {}}
        />
        {errors.includes("message") && (
          <span className={styles.error}>
            {t("common:input_error_message")}
          </span>
        )}
      </div>

      <Button
        text={t("common:contact_form_submit")}
        onClick={handleFormSubmit}
        isLoading={loading}
        disabled={
          errors.length > 0 ||
          loading ||
          name === "" ||
          email === "" ||
          phone === "" ||
          message === ""
        }
      />
      {errors.includes("fetch_error") && (
        <span className={styles.error}>{t("common:contact_form_error")}</span>
      )}
      {success && (
        <span className={styles.success}>
          {t("common:contact_form_success")}
        </span>
      )}
    </form>
  );
};

export default ContactForm;
