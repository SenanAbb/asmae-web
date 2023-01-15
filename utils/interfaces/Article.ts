
export interface IArticle {
    id: number;
    title: string;
    description: string;
    image: string;
    date: string;
}

export interface IArticleProps {
    article: IArticle;
    key: number;
}