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
                <h1 id="post-title">{article.postTitle}</h1>
                <div className="post-meta-container">
                    <img src={article.authorPhoto} alt={`${article.authorName}'s avatar`} className="author-avatar" />
                    <div className="author-date-container">
                        <h3 id="author-name">{article.authorName}</h3>
                        <span className="post-date">{dateStringifier(article.postDate)}</span>
                    </div>
                    <div className="post-likes">
                        <button>❤️ {article.likes}</button>
                    </div>
                </div>
                <div>
                    <p className="post-text">{article.postText}</p>
                </div>
            </section>
        )
    }
}

export default Article;
