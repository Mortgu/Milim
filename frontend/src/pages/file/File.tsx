import React, {useEffect} from "react";

import "./File.scss";
import EditorJs from '@editorjs/editorjs';
import Header from "@editorjs/header";

const File = () => {

    useEffect(() => {
        let editor = new EditorJs({
            holder : 'editorjs',

            tools: {
                header: Header,
            },
        })
    }, []);

    return (
        <React.Fragment>
            <div id="editorjs"></div>
        </React.Fragment>
    )
}

export default File;