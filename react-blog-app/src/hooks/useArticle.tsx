import { useState, useEffect } from "react";
import axios from "axios";

const useArticle = (id: any) => {
    const baseURL = `${process.env.REACT_APP_API_URL}/api/articles/${id}`;

    const [article, setArticle]: any = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const prevTitle = document.title;
        //preventing title change to undefined
        document.title = article.title ?? prevTitle;
        return () => {
            document.title = prevTitle;
        };
    }, [article]);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const { data } = await axios.get(baseURL);
                setArticle(data);
                setIsLoading(false);
            } catch (e: any) {
                setError(e);
                setIsLoading(false);
                console.error(e);
            }
        };

        fetchArticle();
    }, [baseURL, id]);

    return { article, isLoading, error };
};

export default useArticle;
