import "./File.scss";
import Editor, {editorConfig} from "../../components/widgets/Editor/Editor/Editor";
import {LexicalComposer} from "@lexical/react/LexicalComposer";
import EditorDetailSidebar from "../../components/widgets/Editor/EditorDetailSidebar/EditorDetailSidebar";
import EditorEditSidebar from "../../components/widgets/Editor/EditorEditSidebar/EditorEditSidebar";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const File = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<any>(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:4000/drafts/${id}`)
            .then((response: any) => response.json())
            .then((draft: any) => {
                console.log(draft[0].content[0])
                setData(draft[0].content[0])
            })
            .catch((error) => setLoading(false))
            .finally(() => setLoading(false));
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