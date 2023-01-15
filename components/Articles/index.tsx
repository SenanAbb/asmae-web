import styles from "./Articles.module.scss";
import { IArticle } from "../../utils/interfaces/Article";
import Article from "../Article";
import Button from "../Button";
import useTranslation from "next-translate/useTranslation";

interface ArticlesProps {
  articles: IArticle[];
  title: string;
}

const Articles = ({ articles, title }: ArticlesProps) => {
  const { t } = useTranslation();

  return (
    <section className={styles.section_container}>
      <h1>{title ?? null}</h1>
      <div className={styles.articles_container}>
        {articles.map((article: IArticle) => (
          <Article key={article.id} article={article} />
        ))}
      </div>
      <Button text={t("home:see_more")} onClick={() => {console.log("h")}} />
    </section>
  );
};

export default Articles;
