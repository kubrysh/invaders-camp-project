import { useState, useEffect } from "react";
import axios from "axios";

const baseURL = `${process.env.REACT_APP_API_URL}/api/posts`;

const useArticle = (id:any) => {

    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchArticle = async () => {
            setIsLoading(true);

            try {
                const { data } = await axios.get(baseURL);    
                setArticle(data.posts.find((el:any) => el.postId === parseInt(id)));
                setIsLoading(false);
            } catch (e) {
                console.error(e);
            }
        };

        fetchArticle();
    }, [id]);

    return { article, isLoading };
}

export default useArticle;
