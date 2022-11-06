import ExampleTheme from "./themes/EditorTheme";
import "./Editor.scss";

import {RichTextPlugin} from "@lexical/react/LexicalRichTextPlugin";
import {ContentEditable} from "@lexical/react/LexicalContentEditable";
import {HistoryPlugin} from "@lexical/react/LexicalHistoryPlugin";
import {AutoFocusPlugin} from "@lexical/react/LexicalAutoFocusPlugin";
import {HeadingNode, QuoteNode} from "@lexical/rich-text";
import {TableCellNode, TableNode, TableRowNode} from "@lexical/table";
import {ListItemNode, ListNode} from "@lexical/list";
import {CodeHighlightNode, CodeNode} from "@lexical/code";
import {AutoLinkNode, LinkNode} from "@lexical/link";
import {LinkPlugin} from "@lexical/react/LexicalLinkPlugin";
import {ListPlugin} from "@lexical/react/LexicalListPlugin";
import {MarkdownShortcutPlugin} from "@lexical/react/LexicalMarkdownShortcutPlugin";
import {TRANSFORMERS} from "@lexical/markdown";
import {$generateNodesFromDOM} from '@lexical/html';

import ListMaxIndentLevelPlugin from "./plugins/ListMaxIndentLevelPlugin";
import CodeHighlightPlugin from "./plugins/CodeHighlightPlugin";
import AutoLinkPlugin from "./plugins/AutoLinkPlugin";
import ToolbarPlugin2 from "./plugins/toolbar/ToolbarPlugin2";
import {useEffect} from "react";
import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import {$getRoot, $insertNodes} from "lexical";

function Placeholder() {
    return <div className="editor-placeholder">Enter some rich text...</div>;
}

export const editorConfig = {
    namespace: "myEditor",
    // The editor theme
    theme: ExampleTheme,
    // Handling of errors during update
    onError(error: any) {
        throw error;
    },
    // Any custom nodes go here
    nodes: [
        HeadingNode,
        ListNode,
        ListItemNode,
        QuoteNode,
        CodeNode,
        CodeHighlightNode,
        TableNode,
        TableCellNode,
        TableRowNode,
        AutoLinkNode,
        LinkNode
    ]
};

export default function Editor({data}: any) {
    const [editor] = useLexicalComposerContext();

    useEffect(() => {
        editor.update(() => {
            // In the browser you can use the native DOMParser API to parse the HTML string.
            const parser = new DOMParser();
            const dom = parser.parseFromString("<p>template</p>", "text/html");

            // Once you have the DOM instance it's easy to generate LexicalNodes.
            const nodes = $generateNodesFromDOM(editor, dom);

            // Select the root
            $getRoot().select();

            // Insert them at a selection.
            $insertNodes(nodes);

            const editorState = editor.parseEditorState(JSON.stringify(data), () => {
            });
            editor.setEditorState(editorState);
        });
    }, []);
    return (
        <div className="editor-container">
            <ToolbarPlugin2/>
            <div className="editor-inner">
                <RichTextPlugin
                    contentEditable={<ContentEditable className="editor-input"/>}
                    placeholder={<Placeholder/>}
                />
                <HistoryPlugin/>
                <AutoFocusPlugin/>
                <CodeHighlightPlugin/>
                <ListPlugin/>
                <LinkPlugin/>
                <AutoLinkPlugin/>
                <ListMaxIndentLevelPlugin maxDepth={7}/>
                <MarkdownShortcutPlugin transformers={TRANSFORMERS}/>
            </div>
        </div>
    );
}
