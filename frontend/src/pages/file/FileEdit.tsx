import "./File.scss";
import React, {useEffect} from "react";
import {useLoadDraftHook} from "../../hooks/editor/useLoadDraftHook";

const FileEdit = () => {
    const { fetchDraft, data, loading } = useLoadDraftHook();

    useEffect(() => {
        fetchDraft();
    }, []);

    if (loading) return (
        <div className="loader-wrapper">
            <div className="loader"></div>
        </div>
    )

    return (
        <></>
    )
}

export default FileEdit;