import { useState, useEffect } from "react";

export default function DataPost(query) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log("inside post request")
        const controller = new AbortController();
        setLoading(true);
        fetch(`http://localhost:3501/notes/${query.id}`, {
            method: "POST",
            signal: controller.signal,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(query),
        })
            .then((res) => res.json())
            .then((note) => {
                console.log(note);
                setData(note);
            })
            .catch((err) => {
                console.log(err);
                setError(true);
            });
        return () => {
            controller.abort();
        };
    }, []);

    return { loading, error, data };
}
