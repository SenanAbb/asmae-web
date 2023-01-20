import icons from "../../assetsRoutes/icons";
import useTranslation from "next-translate/useTranslation";
import styles from "./Competences.module.scss";
import { useEffect, useRef } from "react";
import useOnScreen from "../../hooks/useOnScreen";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const Competences = () => {
  const { t } = useTranslation();

  const competences = [
    {
      title: t("home:competence1_title"),
      icon: icons.passport,
      subtitle: t("home:competence1_subtitle"),
    },
    {
      title: t("home:competence2_title"),
      icon: icons.urbanisme,
      subtitle: t("home:competence2_subtitle"),
    },
    {
      title: t("home:competence3_title"),
      icon: icons.public,
      subtitle: t("home:competence3_subtitle"),
    },
    // {
    //   title: t("home:competence4_title"),
    //   icon: icons.health,
    //   subtitle: t("home:competence4_subtitle"),
    // },
    // {
    //   title: t("home:competence5_title"),
    //   icon: icons.daily,
    //   subtitle: t("home:competence5_subtitle"),
    // },
  ];

  const ref_list = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const isSectionVisible = useOnScreen(ref_list[0]);

  useEffect(() => {
    ref_list.forEach(async (ref: any, i) => {
      setTimeout(() => {
        if (
          ref.current &&
          ref.current.className &&
          !ref.current.className.includes(styles.push)
        ) {
          ref.current.className = `${ref.current.className} ${styles.push}`;
          ref.current.style.visibility = "visible";
        }
      }, 200 + i * 100);
    });
  }, [isSectionVisible]);

  return (
    <section className={styles.competences_container} ref={ref_list[0]}>
      <div
        className={`${styles.competence_container} ${styles.with_background}`}
        ref={ref_list[1]}
      >
        <div className={styles.link_container}>
          <h2>{t("home:competences_section_title")}</h2>
          <div className={styles.subtitle_container}>
            <p className={styles.subtitle} style={{ textAlign: "left" }}>
              {t("home:competences_section_subtitle")}
            </p>
            <Image
              src={icons.arrow_right}
              alt="arrow icon"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
      {competences.map((el, i) => (
        <Link href={`/competences/${i + 1}`} key={i}>
          <div
            className={styles.competence_container}
            ref={ref_list[i + 2]}
          >
            <Image
              src={el.icon}
              alt="icon"
              width={70}
              height={70}
              className={styles.competence_icon}
            />
            <h4>{el.title}</h4>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Competences;
