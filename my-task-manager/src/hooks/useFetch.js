import { useState, useEffect, useCallback } from "react";

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [reloadFlag, setReloadFlag] = useState(0);

    const refetch = useCallback(() => {
        setReloadFlag(flag => flag + 1);
    }, []);

    useEffect(() => {
        setLoading(true);
        setError(null);
        const urlWithCacheBust = `${url}${url.includes("?") ? "&" : "?"}_ts=${Date.now()}_${reloadFlag}`;
        fetch(urlWithCacheBust, { cache: 'no-store' })
            .then((response) => {
                if (!response.ok) throw new Error("Network response was not ok");
                return response.json();
            })
            .then((json) => {
                setData(json);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [url, reloadFlag]);

    return { data, loading, error, refetch };
}

export default useFetch;