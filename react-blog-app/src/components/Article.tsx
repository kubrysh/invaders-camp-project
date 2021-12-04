import useArticle from "../hooks/useArticle";
import dateStringifier from "../utils/dateStringifier";

const Article = ({ id }:any) => {

    const { article, isLoading }:any = useArticle(id);

    if (isLoading) {
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
