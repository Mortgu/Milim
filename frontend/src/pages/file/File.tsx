import {useLoadDraftHook} from "../../hooks/editor/useLoadDraftHook";
import React, {useEffect} from "react";
import {$generateHtmlFromNodes} from '@lexical/html';
import {editorConfig} from "../../components/widgets/Editor/Editor/Editor";
import EditorDetailSidebar from "../../components/widgets/Editor/EditorDetailSidebar/EditorDetailSidebar";
import {LexicalComposer} from "@lexical/react/LexicalComposer";

const File = () => {
    const {fetchDraft, data, loading} = useLoadDraftHook();

    useEffect(() => {
        fetchDraft();
    }, []);

    useEffect(() => {
        if (data) {}
    }, [data]);

    if (loading) return (
        <div className="loader-wrapper">
            <div className="loader"></div>
        </div>
    )

    return (
        <LexicalComposer initialConfig={editorConfig}>
            <EditorDetailSidebar />
        </LexicalComposer>
    )
}

export default File;