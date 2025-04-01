import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import styles from "./competences.module.scss";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import icons from "../../assetsRoutes/icons";
import Head from "next/head";

const Competences = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { id } = router.query;

  const renderOtherCompetencesLinks = (id: string | string[]) => {
    const links = [
      { id: "1", title: t("home:competence1_title") },
      { id: "2", title: t("home:competence2_title") },
      { id: "3", title: t("home:competence3_title") },
      // { id: "4", title: t("home:competence4_title") },
      // { id: "5", title: t("home:competence5_title") },
    ];

    return links.map((link) => {
      if (link.id !== id) {
        return (
          <Link href={`/competences/${link.id}`} key={link.id}>
            <Image
              src={icons.arrow_right_green}
              alt="arrow-right-green"
              width={100}
              height={40}
            />
            {link.title}
          </Link>
        );
      }
    });
  };

  return (
    <>
      <Head>
        <title>{t("competences:page_title")}</title>
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
        <div className={styles.container}>
          {/* COMPENTENCE 1 */}
          {id === "1" && (
            <div className={styles.competence_container}>
              <div className={styles.competence}>
                <div className={styles.competence_title}>
                  <span>{`${t("home:competence1_title")}`}</span>
                </div>
                <p>{t("competences:competence1_predescription")}</p>
                <br />
                <p>{t("competences:competence1_description")}</p>
                <ul>
                  <li>{t("competences:competence1_description_list1")}</li>
                  <li>{t("competences:competence1_description_list2")}</li>
                  <li>{t("competences:competence1_description_list3")}</li>
                  <li>{t("competences:competence1_description_list4")}</li>
                  <li>{t("competences:competence1_description_list5")}</li>
                  <li>{t("competences:competence1_description_list6")}</li>
                </ul>
                <p>{t("competences:competence1_description_end")}</p>
              </div>
              <Image
                src={
                  require("../../public/assets/images/competence1.png").default
                    .src
                }
                alt="competence1"
                width={500}
                height={500}
              />
            </div>
          )}

          {/* COMPENTENCE 2 */}
          {id === "2" && (
            <div className={styles.competence_container}>
              <div className={styles.competence}>
                <div className={styles.competence_title}>
                  <span>{`${t("home:competence2_title")}`}</span>
                </div>
                <p>{t("competences:competence2_description")}</p>
              </div>
              <Image
                src={
                  require("../../public/assets/images/competence2.png").default
                    .src
                }
                alt="competence2"
                width={500}
                height={500}
              />
            </div>
          )}

          {/* COMPENTENCE 3 */}
          {id === "3" && (
            <div className={styles.competence_container}>
              <div className={styles.competence}>
                <div className={styles.competence_title}>
                  <span>{`${t("home:competence3_title")}`}</span>
                </div>
                <p>{t("competences:competence3_description")}</p>
                <ul>
                  <li>{t("competences:competence3_description_list1")}</li>
                  <li>{t("competences:competence3_description_list2")}</li>
                  <li>{t("competences:competence3_description_list3")}</li>
                  <li>{t("competences:competence3_description_list4")}</li>
                  <li>{t("competences:competence3_description_list5")}</li>
                  <li>{t("competences:competence3_description_list6")}</li>
                  <li>{t("competences:competence3_description_list7")}</li>
                  <li>{t("competences:competence3_description_list8")}</li>
                </ul>
                <p>{t("competences:competence3_description_end")}</p>
              </div>
              <Image
                src={
                  require("../../public/assets/images/competence3.png").default
                    .src
                }
                alt="competence3"
                width={500}
                height={500}
              />
            </div>
          )}

          {/* COMPENTENCE 4 */}
          {id === "4" && (
            <div className={styles.competence_container}>
              <div className={styles.competence}>
                <div className={styles.competence_title}>
                  <span>{`${t("home:competence4_title")}`}</span>
                </div>
                <p style={{ marginBottom: "1rem" }}>
                  {t("competences:competence4_description")}
                </p>
                <p>{t("competences:competence4_description2")}</p>
                <ul>
                  <li style={{ marginBottom: "1rem" }}>
                    {t("competences:competence4_description_list1")}
                  </li>
                  <li>{t("competences:competence4_description_list2")}</li>
                </ul>
              </div>
              <Image
                src={
                  require("../../public/assets/images/competence4.png").default
                    .src
                }
                alt="competence4"
                width={1000}
                height={1000}
                className={styles.competence4_image}
              />
            </div>
          )}

          {/* COMPENTENCE 5 */}
          {id === "5" && (
            <div className={styles.competence_container}>
              <div className={styles.competence}>
                <div className={styles.competence_title}>
                  <span>{`${t("home:competence5_title")}`}</span>
                </div>
                <p>{t("competences:competence5_description")}</p>
              </div>
              <Image
                src={
                  require("../../public/assets/images/competence5.png").default
                    .src
                }
                alt="competence5"
                width={500}
                height={500}
              />
            </div>
          )}
        </div>

        <div className={styles.competences_link_container}>
          <h3>{t("competences:more_links")}</h3>
          <div className={styles.competences_link}>
            {id && renderOtherCompetencesLinks(id)}
          </div>
        </div>

        <Link href="/#contact">
          <div className={styles.contact_me}>
            {t("competences:contact_title")}
          </div>
        </Link>
        <Footer />
      </main>
    </>
  );
};

export default Competences;
