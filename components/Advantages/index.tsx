import styles from "./Advantages.module.scss";
import useTranslation from "next-translate/useTranslation";
import { useEffect, useRef, useState } from "react";
import icons from "../../assetsRoutes/icons";
import images from "../../assetsRoutes/images";
import Image from "next/image";

const Advantages = () => {
  const { t } = useTranslation();

  const [activeIndex, setActiveIndex] = useState(0);
  const itemRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (activeIndex === carouselItems.length - 1) {
  //       setTimeout(() => {
  //         setActiveIndex(0);
  //       }, 300);
  //     } else {
  //       setTimeout(() => {
  //         setActiveIndex(activeIndex + 1);
  //       }, 300);
  //     }
  //     if (itemRef.current) {
  //       itemRef.current.classList.add(styles.fade_out);
  //       setTimeout(() => {
  //         if (itemRef.current) {
  //           itemRef.current.classList.remove(styles.fade_out);
  //         }
  //       }, 600);
  //     }
  //   }, 10000);
  // }, [activeIndex]);

  const carouselItems = [
    {
      title: t("home:advantage_1_title"),
      description: t("home:advantage_1_description"),
    },
    {
      title: t("home:advantage_2_title"),
      description: t("home:advantage_2_description"),
    },
    {
      title: t("home:advantage_3_title"),
      description: t("home:advantage_3_description"),
    },
    {
      title: t("home:advantage_4_title"),
      description: t("home:advantage_4_description"),
    },
  ];

  const handleLeftArrowClick = () => {
    if (activeIndex === 0) {
      setTimeout(() => {
        setActiveIndex(carouselItems.length - 1);
      }, 300);
    } else {
      setTimeout(() => {
        setActiveIndex(activeIndex - 1);
      }, 300);
    }

    if (itemRef.current) {
      itemRef.current.classList.add(styles.fade_out);
      setTimeout(() => {
        if (itemRef.current) {
          itemRef.current.classList.remove(styles.fade_out);
        }
      }, 600);
    }
  };

  const handleRightArrowClick = () => {
    if (activeIndex === carouselItems.length - 1) {
      setTimeout(() => {
        setActiveIndex(0);
      }, 300);
    } else {
      setTimeout(() => {
        setActiveIndex(activeIndex + 1);
      }, 300);
    }

    if (itemRef.current) {
      itemRef.current.classList.add(styles.fade_out);
      setTimeout(() => {
        if (itemRef.current) {
          itemRef.current.classList.remove(styles.fade_out);
        }
      }, 600);
    }
  };

  return (
    <section className={styles.container}>
      <h1>{t("home:advantages_title")}</h1>
      <p>{t("home:advantages_description")}</p>
      <div className={styles.carousel}>
        <div
          className={styles.carousel_left_arrow}
          onClick={handleLeftArrowClick}
          onMouseEnter={(e: any) => {
            e.target.classList.add(styles.hover_left);
            setTimeout(() => {
              e.target.classList.remove(styles.hover_left);
            }, 1000);
          }}
        >
          <Image 
            src={icons.arrow_left_green_bold}
            alt="arrow"
            width={100}
            height={120}
          />
        </div>
        <div className={styles.carousel_item} ref={itemRef}>
          <div className={styles.carousel_item_title}>
            {carouselItems[activeIndex].title}
          </div>
          <p className={styles.carousel_item_description}>
            {carouselItems[activeIndex].description}
          </p>
        </div>
        <div
          className={styles.carousel_right_arrow}
          onClick={handleRightArrowClick}
          onMouseEnter={(e: any) => {
            e.target.classList.add(styles.hover_right);
            setTimeout(() => {
              e.target.classList.remove(styles.hover_right);
            }, 1000);
          }}
        >
          <Image 
            src={icons.arrow_right_green_bold}
            alt="arrow"
            width={100}
            height={120}
          />
        </div>
      </div>
      <div className={styles.dots}>
        {carouselItems.map((item, index) => {
          return (
            <div
              className={`${styles.dot} ${
                activeIndex === index ? styles.active_dot : ""
              }`}
              key={index}
              onClick={() => {
                setTimeout(() => {
                  setActiveIndex(index);
                }, 300);
                if (itemRef.current) {
                  itemRef.current.classList.add(styles.fade_out);
                  setTimeout(() => {
                    if (itemRef.current) {
                      itemRef.current.classList.remove(styles.fade_out);
                    }
                  }, 600);
                }
              }}
            ></div>
          );
        })}
      </div>
    </section>
  );
};

export default Advantages;
