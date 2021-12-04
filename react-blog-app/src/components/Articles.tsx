import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

    const [error, setError] = useState<any>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/api/posts`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setPosts(result.posts);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, []);


    if (error) {
        return <p>Error: {error.message}</p>;
    } else if (!isLoaded) {
        return <p>Loading...</p>;
    } else {
        return (
            <>
                {
                    posts.map((post:any) => {
                        return <RenderArticle { ...post } key={post.postId} />
                    })
                }
            </>
        )
    }
}

export default Articles;
