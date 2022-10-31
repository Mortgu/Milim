import {useState} from "react";
import {useParams} from "react-router-dom";

export const useLoadDraftHook = () => {
    const [data, setData] = useState<[]>([]);
    const [error, setError] = useState(null);
    const {id} = useParams();

    const [loading, setLoading] = useState(true);

    const fetchDraft = async () => {
        setError(null);
        setLoading(true);

        const response = await fetch(`http://localhost:4000/drafts/${id}`);

        const json = await response.json();

        if (response.ok) {
            setData(json[0].content[0]);
            setLoading(false);
        } else {
            setError(json.message);
            setLoading(false);
            setData([]);
        }
    }

    return {fetchDraft, data, loading};
}