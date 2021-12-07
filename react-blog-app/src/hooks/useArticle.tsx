import { useState, useEffect, useRef } from "react";
import axios from "axios";

const useArticle = (id:any) => {

    const baseURL = `${process.env.REACT_APP_API_URL}/api/articles/${id}`;

    const isCurrent = useRef(true);
    const [article, setArticle]:any = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const prevTitle = document.title;
        //preventing title change to undefined
        document.title = article.articleTitle ?? prevTitle;
        return () => {
            document.title = prevTitle;
        };
    }, [article]);

    useEffect(() => {
        return () => {
            isCurrent.current = false;
        };
    }, []);

    useEffect(() => {
        const fetchArticle = async () => {
            setIsLoading(true);

            try {
                const { data } = await axios.get(baseURL);
                //Preventing changing state of an unmounted component
                if (isCurrent.current) {
                    setArticle(data);
                    setIsLoading(false);
                }
            } catch (e:any) {
                setError(e);
                console.error(e);
            }
        };

        fetchArticle();
    }, [baseURL, id]);

    return { article, isLoading, error };
}

export default useArticle;
