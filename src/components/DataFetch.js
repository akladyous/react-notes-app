import {useState, useEffect} from 'react'

export default function DataFetch() {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [data, setData] = useState([])

    useEffect(()=>{
        const controller = new AbortController()
        setLoading(true)
        fetch("http://localhost:3501/notes", {signal: controller.signal})
        .then(res => res.json())
        .then(note => {
            console.log(note)
            setData(note)
        })
        .catch(err => {
            console.log(err);
            setError(true);

        })
        return () => {
            controller.abort();
        }
    }, [])
    
    return {loading, error, data}
}
