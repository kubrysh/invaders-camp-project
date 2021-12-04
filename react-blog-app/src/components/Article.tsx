import { useState, useEffect } from "react";
import dateStringifier from "../utils/dateStringifier";

const Article = ({ id }:any) => {

    const [article, setArticle] = useState<any>({});

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/api/posts`)
            .then(res => res.json())
            .then(
                (result) => {
                    setArticle(result.posts.find((el:any) => el.postId === parseInt(id)));
                },
                (error) => {
                    console.log(error);
                }
            )
    }, [id]);

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

export default Article;
