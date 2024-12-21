import { useState, useEffect } from "react";

export default function useTrendingMovies(url = `${process.env.BASE_URL}/api/movies/trending`) {
    const [info, setInfo] = useState({
        isLoading: false,
        isError: false,
        data: [],
        error: null,
    });

    const fetchTrending = async (signal) => {
        setInfo((prev) => ({ ...prev, isLoading: true, isError: false, error: null }));
        try {
            const res = await fetch(url, { signal });
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const resJson = await res.json();
            setInfo({
                isLoading: false,
                isError: false,
                data: resJson.results,
                error: null,
            });
        } catch (error) {
            if (signal && signal.aborted) {
                console.log("Fetch aborted");
                return;
            }
            setInfo({
                isLoading: false,
                isError: true,
                data: [],
                error,
            });
        }
    };

    useEffect(() => {
        const controller = new AbortController();
        fetchTrending(controller.signal);

        return () => {
            controller.abort(); // Cancel the fetch request on unmount
        };
    }, [url]);

    const refetch = () => {
        const controller = new AbortController();
        fetchTrending(controller.signal);
    };

    return { ...info, refetch };
}