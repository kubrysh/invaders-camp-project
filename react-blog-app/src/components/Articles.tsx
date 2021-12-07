import { Link } from "react-router-dom";
import useArticles from "../hooks/useArticles";
import dateStringifier from "../utils/dateStringifier";

const RenderArticle = (props: any) => {
    return (
        <article>
            <hr className="horiz-line" />
            <div className="article-meta-container">
                <img src={props.authorPhoto} alt={`${props.authorName}'s avatar`} className="author-avatar" />
                <div className="author-date-container">
                    <h3 id="author-name">{props.authorName}</h3>
                    <span className="article-date">{dateStringifier(props.articleDate)}</span>
                </div>
                <div className="article-likes">
                    <button>❤️ {props.likes}</button>
                </div>
            </div>
            <div>
                <h2>
                    <Link to={`/article_${props.articleId}`}>{props.articleTitle}</Link>
                </h2>
                <p className="article-text">{props.articleText}</p>
                <Link to={`/article_${props.articleId}`} id="read-more-lnk">Read more...</Link>
            </div>
        </article>
    )
}

const Articles = (props:any) => {

    const { articles, isLoading } = useArticles();

    if (isLoading) {
        return <p>Loading...</p>
    } else {
        return (
            <>
                {
                    articles.map((article:any) => {
                        return <RenderArticle { ...article } key={article.articleId} />
                    })
                }
            </>
        )
    }
}

export default Articles;
