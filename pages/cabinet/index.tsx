import styles from "./cabinet.module.scss";
import useTranslation from "next-translate/useTranslation";
import images from "../../assetsRoutes/images";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Head from "next/head";

const Cabinet = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("cabinet:page_title")}</title>
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
        q <meta key="robots" name="robots" content="index,follow" />
        <meta key="googlebot" name="googlebot" content="index,follow" />
      </Head>
      <main>
        <Navbar />
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.text_container}>
              <h3>{`${t("common:graduate")} ${t("common:name")} ${t(
                "common:surname"
              )}`}</h3>
              <p>{t("cabinet:description_1")}</p>
              <p>{t("cabinet:description_2")}</p>
              <p>{t("cabinet:description_3")}</p>
              {/* <p>{t("cabinet:competences_title")}</p>
            <ul>
            <li><Link href="/competences/1">{t("home:competence1_title")}</Link></li>
              <li><Link href="/competences/2">{t("home:competence2_title")}</Link></li>
              <li><Link href="/competences/3">{t("home:competence3_title")}</Link></li>
              <li><Link href="/competences/4">{t("home:competence4_title")}</Link></li>
              <li><Link href="/competences/5">{t("home:competence5_title")}</Link></li>
            </ul> */}
            </div>
            <div className={styles.image_container}>
              <Image
                src={images.cabinetImage2}
                alt="Cabinet"
                width={500}
                height={600}
              />
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
};

export default Cabinet;
