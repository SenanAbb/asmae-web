import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./Navbar.module.scss";
import useTranslation from "next-translate/useTranslation";
import LanguageSelector from "../LanguageSelector";
import icons from "../../assetsRoutes/icons";
import images from "../../assetsRoutes/images";

const Navbar = () => {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <nav className={styles.container}>
      <div className={styles.navbar}>
        <Link href="/">
          <div className={styles.logo}>
            <Image src={images.logoColor} alt="logo" width={100} height={100} />
          </div>
        </Link>

        <div className={styles.links_container}>
          <div
            className={`${router.pathname === "/" ? styles.active_link : ""} ${
              styles.link
            }`}
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
            className={`
              ${styles.competences_container}
            `}
            onMouseEnter={(e: any) => {
              e.currentTarget.classList.add(styles.open_dropdown);
            }}
            onMouseLeave={(e: any) => {
              e.currentTarget.classList.remove(styles.open_dropdown);
            }}
          >
            <p>{t("navigation:competences")}</p>
            <Image src={icons.arrow_down} alt="logo" width={100} height={100} />
            <div className={styles.competences_list}>
              <Link href="/competences/1">{t("home:competence1_title")}</Link>
              <Link href="/competences/2">{t("home:competence2_title")}</Link>
              <Link href="/competences/3">{t("home:competence3_title")}</Link>
              {/* <Link href="/competences/4">{t("home:competence4_title")}</Link> */}
              {/* <Link href="/competences/5">{t("home:competence5_title")}</Link> */}
            </div>
          </div>
          <div
            className={`${
              router.pathname === "/contact" ? styles.active_link : ""
            } ${styles.link}`}
          >
            <Link href="/#contact" scroll>
              <p>{t("navigation:contact")}</p>
            </Link>
          </div>
        </div>

        <LanguageSelector />
      </div>
    </nav>
  );
};

export default Navbar;
