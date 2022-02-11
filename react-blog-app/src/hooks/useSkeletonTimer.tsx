import { useState, useEffect } from "react";

const useSkeletonTimer = (isDataLoading: boolean) => {
    const [minimumTimeElapsed, setMinimumTimeElapsed] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setMinimumTimeElapsed(true);
        }, 500);
        return () => {
            clearTimeout(timer);
        };
    }, []);

    useEffect(() => {
        setIsLoading(isDataLoading || !minimumTimeElapsed);
    }, [isDataLoading, minimumTimeElapsed]);

    return isLoading;
};

export default useSkeletonTimer;
