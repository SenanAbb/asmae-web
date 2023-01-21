import Link from "next/link";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import styles from "./Footer.module.scss";
import images from "../../assetsRoutes/images";
import Image from "next/image";

const Footer = ({ style }: any) => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <footer style={style ?? {}} className={styles.container}>
      <div className={styles.footer_container}>
        <div className={styles.logo_container}>
          <Image 
            src={images.logo}
            alt="logo"
            width={100}
            height={100}
          />
          <p className={styles.footer_description}>
            {t("navigation:footer_description")}
          </p>
        </div>
        <div className={styles.links_container}>
          <div className={styles.links}>
            <div
              className={`${
                router.pathname === "/" ? styles.active_link : ""
              } ${styles.link}`}
            >
              <Link href="/">
                <p>{t("navigation:home")}</p>
              </Link>
            </div>
            <div
              className={`${
                router.pathname === "/cabinet" ? styles.active_link : ""
              } ${styles.link}`}
            >
              <Link href="/cabinet">
                <p>{t("navigation:cabinet")}</p>
              </Link>
            </div>
            <div
              className={`${
                router.pathname === "/contact" ? styles.active_link : ""
              } ${styles.link}`}
            >
              <Link href="/#contact">
                <p>{t("navigation:contact")}</p>
              </Link>
            </div>
          </div>
          <div className={styles.separator}></div>
          <div className={styles.copyright}>
            <p>© 2023 - {t("navigation:all_rights_reserved")}</p>
            <p>-</p>
            <Link href="/politique-confidentialite">
              <p> {` ${t("navigation:politique_confidentialite")}`}</p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
