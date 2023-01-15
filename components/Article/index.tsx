import icons from "../../assetsRoutes/icons";
import { IArticleProps } from "../../utils/interfaces/Article";
import styles from "./Article.module.scss";
import useTranslation from "next-translate/useTranslation";

const Article = ({ article }: IArticleProps) => {
  const { t } = useTranslation();

  const handleReadMore = () => {};

  return (
    <div className={styles.article}>
      <div onClick={handleReadMore}>
        <img src={article.image}></img>
      </div>
      <p className={styles.date}>{article.date}</p>
      <h5 className={styles.title}>{article.title}</h5>
      <p className={styles.description}>{article.description}</p>
      <div className={styles.read_more} onClick={handleReadMore}>
        <span>{t("home:read_more")}</span>
        <img src={icons.large_arrow_right} alt="Large arrow icon"></img>
      </div>
    </div>
  );
};

export default Article;
