import { useState, useEffect } from "react";
import axios from "axios";
import useSkeletonTimer from "./useSkeletonTimer";

const useArticles = () => {
    const baseURL = `${process.env.REACT_APP_API_URL}/api/articles`;

    const [articles, setArticles] = useState([
        { articleId: 1 },
        { articleId: 2 }
    ]);
    const [isDataLoading, setIsDataLoading] = useState(true);

    const isLoading = useSkeletonTimer(isDataLoading);

    useEffect(() => {
        const fetchArticles = async () => {

            try {
                const { data } = await axios.get(baseURL);
                setArticles(data.articles);
                setIsDataLoading(false);
            } catch (e: any) {
                setIsDataLoading(false);
                console.error(e);
            }
        };

        fetchArticles();
    }, [baseURL]);

    return { articles, isLoading };
};

export default useArticles;
