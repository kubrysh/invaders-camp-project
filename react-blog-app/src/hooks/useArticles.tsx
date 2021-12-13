import { useState, useEffect } from "react";
import axios from "axios";

const useArticles = () => {

    const baseURL = `${process.env.REACT_APP_API_URL}/api/articles`;

    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchArticles = async () => {
            setIsLoading(true);

            try {
                const { data } = await axios.get(baseURL);
                setArticles(data.articles);
                setIsLoading(false);
            } catch (e) {
                console.error(e);
            }
        };

        fetchArticles();
    }, [baseURL]);

    return { articles, isLoading };
}

export default useArticles;
