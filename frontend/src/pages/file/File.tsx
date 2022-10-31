import "./File.scss";
import Editor, {editorConfig} from "../../components/widgets/Editor/Editor/Editor";
import {LexicalComposer} from "@lexical/react/LexicalComposer";
import EditorDetailSidebar from "../../components/widgets/Editor/EditorDetailSidebar/EditorDetailSidebar";
import EditorEditSidebar from "../../components/widgets/Editor/EditorEditSidebar/EditorEditSidebar";
import React, {useEffect} from "react";
import {useLoadDraftHook} from "../../hooks/editor/useLoadDraftHook";

const File = () => {
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
        <LexicalComposer initialConfig={editorConfig}>
            <EditorDetailSidebar />
            <EditorEditSidebar />
            <Editor data={data} />
        </LexicalComposer>
    )
}

export default File;