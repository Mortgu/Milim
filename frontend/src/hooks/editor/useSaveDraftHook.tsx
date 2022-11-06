import {useState} from "react";
import {useParams} from "react-router-dom";

export const useSaveDraftHook = () => {
    const [data, setData] = useState<[]>([]);
    const [error, setError] = useState(null);
    const {id} = useParams();

    const [loading, setLoading] = useState(true);

    const saveDraft = async (body: any) => {
        setError(null);
        setLoading(true);

        const response = await fetch(`http://localhost:4000/drafts/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                fileName: "test-fileName",
                content: body
            })
        });

        const json = await response.json();

        if (response.ok) {
            console.log(response)
            setLoading(false);
        } else {
            console.log(json)
            setError(json.message);
            setLoading(false);
        }
    }

    return {saveDraft, data, loading};
}