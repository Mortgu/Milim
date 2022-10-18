import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';

import "./EntrySubpage.scss";

const EntrySubpage = ({setShowNavigation}: any) => {
    const {subject} = useParams();

    let editor: EditorJS = new EditorJS("editor");

    useEffect(() => {
        setShowNavigation(true);
    }, [editor]);

    const save = async () => {
        console.log(await editor)
        await editor.save().then((data) => console.log(data))
    }

    return (
        <div className="entry-page">
            <div className="entry-page-head">
                <button className="button button-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                         viewBox="0 0 24 24" width="24px" fill="#000000">
                        <g>
                            <rect fill="none" height="24" width="24"/>
                        </g>
                        <g>
                            <path
                                d="M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M7,9l1.41,1.41L11,7.83V16h2V7.83l2.59,2.58L17,9l-5-5L7,9z"/>
                        </g>
                    </svg>
                </button>
                <button className="button button-primary" onClick={save}>Save</button>
            </div>
            <div className="editor-section">
                <div id="editor"></div>
            </div>
        </div>
    );
}

export default EntrySubpage;