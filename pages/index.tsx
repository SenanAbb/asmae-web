// Hooks
import { useRef } from "react";
import useTranslation from "next-translate/useTranslation";

// Components
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Competences from "../components/Competences";
import Advantages from "../components/Advantages";
import Articles from "../components/Articles";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

// Utils
import icons from "../assetsRoutes/icons";
import styles from "../styles/Home.module.scss";
import articles_mock from "../data/articles/articles_mock";

export default function Home() {
  const { t } = useTranslation();
  const contactRef = useRef<HTMLElement>(null);

  return (
    <>
      <Head>
        <title>{t("home:home_title")}</title>
        <meta
          name="description"
          content={t("home:home_description")}
          key="desc"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
        <meta key="robots" name="robots" content="index,follow" />
        <meta key="googlebot" name="googlebot" content="index,follow" />
      </Head>
      <main>
        <Navbar />
        {/** PORTADA */}
        <section className={styles.first_section}>
          <div className={styles.info_container}>
            <div className={styles.info_details}>
              <span className={styles.info_details_title}>
                {t("common:graduate")}
              </span>
              <span className={styles.info_details_name}>
                {t("common:name")}
              </span>
              <span className={styles.info_details_surname}>
                {t("common:surname")}
              </span>

              <div className={styles.contact_button_container}>
                <span>{t("common:contact")}</span>
                <div
                  className={styles.contact_icon}
                  onClick={() => {
                    contactRef.current?.scrollIntoView();
                  }}
                >
                  <Image
                    src={icons.arrow_right}
                    alt="Contact icon"
                    width={45}
                    height={45}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/** BANNER 1 */}
        <section className={styles.banner_container}>
          <div className={styles.banner}>
            <div className={styles.title}>
              <h1>{t("home:banner1_title")}</h1>
              <h3>{t("home:banner1_subtitle")}</h3>
            </div>
            <p>{t("home:banner1_description")}</p>
          </div>
        </section>

        <Competences />
        <Advantages />
        {/* <Articles articles={articles_mock} title={t("common:last_articles")} /> */}
        <ContactSection ref={contactRef} />
        <Footer />
      </main>
    </>
  );
}
