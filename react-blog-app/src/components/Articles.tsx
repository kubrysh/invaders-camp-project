import { useState, useEffect } from "react";

import Article from "./Article";

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
    }, [props.isNewArticleSubmitted]);


    if (error) {
        return <p>Error: {error.message}</p>;
    } else if (!isLoaded) {
        return <p>Loading...</p>;
    } else {
        return (
            <>
                {
                    posts.map((post:any) => {
                        return <Article { ...post } key={post.postId} />
                    })
                }
            </>
        )
    }
}

export default Articles;
