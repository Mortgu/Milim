import React, {useEffect, useState} from "react";
import {DraftHandler} from "../../utils/DraftHandler";

const File = () => {
    const [draft, setDraft] = useState<any>(null);

    const fetchDraftById = (id: string) => {
        return new DraftHandler(`http://localhost:4000/drafts/${id}`, 'GET')
            .build((data: any) => {
                console.log(data)
                setDraft(data);
            });
    }

    useEffect(() => {
        const draftId = window.location.pathname.split('/').slice(1, 3)[1];
        fetchDraftById(draftId);
    }, []);

    useEffect(() => {
        console.log(draft)
    }, [setDraft]);

    return (
        <></>
    )
}

export default File;