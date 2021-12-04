import { useState, useEffect } from "react";
import axios from "axios";

const baseURL = `${process.env.REACT_APP_API_URL}/api/posts`;

const useArticles = () => {

    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchArticles = async () => {
            setIsLoading(true);

            try {
                const { data } = await axios.get(baseURL);    
                setArticles(data.posts);
                setIsLoading(false);
            } catch (e) {
                console.error(e);
            }
        };

        fetchArticles();
    }, []);

    return { articles, isLoading };
}

export default useArticles;
