import { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";

const useArticles = (updateArticles:any) => {

    const baseURL = `${process.env.REACT_APP_API_URL}/api/articles`;

    const isCurrent = useRef(true);
    const isInitialMount = useRef(true);
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchArticles = useCallback(
        async () => {
            setIsLoading(true);
    
            try {
                const { data } = await axios.get(baseURL);
                //Preventing changing state of an unmounted component
                if (isCurrent.current) {
                    setArticles(data.articles);
                    setIsLoading(false);
                }
            } catch (e) {
                console.error(e);
            }
        },
        [baseURL]
    );

    // Setting ref on cleanup to indicate unmounting
    useEffect(() => {
        return () => {
            isCurrent.current = false;
        };
    }, []);

    // Only on mount
    useEffect(() => {
        fetchArticles();
    }, [fetchArticles]);

    // Only on update
    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            if (updateArticles) {   //prevents fetching second time when var changes to false
                fetchArticles();
            }
        }
    }, [fetchArticles, updateArticles]);

    return { articles, isLoading };
}

export default useArticles;
