import React from "react";
import {editorConfig} from "../../components/widgets/Editor/Editor/Editor";
import EditorDetailSidebar from "../../components/widgets/Editor/EditorDetailSidebar/EditorDetailSidebar";
import {LexicalComposer} from "@lexical/react/LexicalComposer";
import Renderer from "../../components/widgets/Editor/Editor/Renderer";

const File = () => {
    return (
        <LexicalComposer initialConfig={editorConfig}>
            <Renderer />
        </LexicalComposer>
    )
}

export default File;