import useTranslation from "next-translate/useTranslation";
import setLanguage from "next-translate/setLanguage";
import icons from "../../assetsRoutes/icons";
import styles from "./LanguageSelector.module.scss";
import Select from "react-select";
import Image from "next/image";

const options = [
  {
    value: "es",
    label: (
      <div className={styles.language_container}>
        <Image src={icons.es} alt="es" width={20} height={20} />
        <p>ES</p>
      </div>
    ),
  },
  {
    value: "fr",
    label: (
      <div className={styles.language_container}>
        <Image src={icons.fr} alt="es" width={20} height={20} />
        <p>FR</p>
      </div>
    ),
  },
  {
    value: "en",
    label: (
      <div className={styles.language_container}>
        <Image src={icons.en} alt="es" width={20} height={20} />
        <p>EN</p>
      </div>
    ),
  },
];

const LanguageSelector = () => {
  const { lang } = useTranslation();
  return (
    <Select
      options={options}
      defaultValue={options.find((op) => op.value === lang)}
      blurInputOnSelect
      closeMenuOnSelect
      onChange={(e) => e && setLanguage(e.value)}
      classNames={{
        control: () => styles.container,
        singleValue: () => styles.language_container,
        menu: () => styles.menu,
      }}
    />
  );
};

export default LanguageSelector;
