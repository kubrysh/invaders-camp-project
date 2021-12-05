import { useState, useEffect } from "react";
import axios from "axios";

const baseURL = `${process.env.REACT_APP_API_URL}/api/posts`;

const useArticle = (id:any) => {

    const baseURL = `${process.env.REACT_APP_API_URL}/api/posts/${id}`;

    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchArticle = async () => {
            setIsLoading(true);

            try {
                const { data } = await axios.get(baseURL);    
                    setArticle(data);
                setIsLoading(false);
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
