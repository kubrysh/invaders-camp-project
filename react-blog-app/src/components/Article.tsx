import { useHistory } from "react-router";
import useArticle from "../hooks/useArticle";
import dateStringifier from "../utils/dateStringifier";

const Article = ({ id }:any) => {

    const { article, isLoading, error }:any = useArticle(id);
    const history = useHistory();

    if (error && error.response.status === 404) {
        history.replace("/404");
        return null;
    } else if (isLoading) {
        return <p>Loading...</p>
    } else {
        return (
            <section className="main-column">
                <h1 id="article-title">{article.articleTitle}</h1>
                <div className="article-meta-container">
                    <img src={article.authorPhoto} alt={`${article.authorName}'s avatar`} className="author-avatar" />
                    <div className="author-date-container">
                        <h3 id="author-name">{article.authorName}</h3>
                        <span className="article-date">{dateStringifier(article.articleDate)}</span>
                    </div>
                    <div className="article-likes">
                        <button>❤️ {article.likes}</button>
                    </div>
                </div>
                <div>
                    <p className="article-text">{article.articleText}</p>
                </div>
            </section>
        )
    }
}

export default Article;
