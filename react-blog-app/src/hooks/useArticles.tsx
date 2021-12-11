import { useState, useEffect, useRef } from "react";
import axios from "axios";

const useArticles = () => {

    const baseURL = `${process.env.REACT_APP_API_URL}/api/posts`;

    const isCurrent = useRef(true);
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        return () => {
            isCurrent.current = false;
        };
    }, []);

    useEffect(() => {
        const fetchArticles = async () => {
            setIsLoading(true);

            try {
                const { data } = await axios.get(baseURL);
                //Preventing changing state of an unmounted component
                if (isCurrent.current) {
                    setArticles(data.posts);
                    setIsLoading(false);
                }
            } catch (e) {
                console.error(e);
            }
        };

        fetchArticles();
    }, [baseURL]);

    return { articles, isLoading };
}

export default useArticles;
