import { Link } from "react-router-dom";
import useArticles from "../hooks/useArticles";
import dateStringifier from "../utils/dateStringifier";

const RenderArticle = (props: any) => {
    return (
        <article>
            <hr className="horiz-line" />
            <div className="post-meta-container">
                <img src={props.authorPhoto} alt={`${props.authorName}'s avatar`} className="author-avatar" />
                <div className="author-date-container">
                    <h3 id="author-name">{props.authorName}</h3>
                    <span className="post-date">{dateStringifier(props.postDate)}</span>
                </div>
                <div className="post-likes">
                    <button>❤️ {props.likes}</button>
                </div>
            </div>
            <div>
                <h2>
                    <Link to={`/article_${props.postId}`}>{props.postTitle}</Link>
                </h2>
                <p className="post-text">{props.postText}</p>
                <Link to={`/article_${props.postId}`} id="read-more-lnk">Read more...</Link>
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
                        return <RenderArticle { ...article } key={article.postId} />
                    })
                }
            </>
        )
    }
}

export default Articles;
