import "./Toolbar.scss";

import {useEffect, useRef} from "react";

import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";

import BoldFormatIcon from '@material-ui/icons/FormatBold';

import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import BlockOptionsDropdownListItem from "./BlockOptionsDropdownList/BlockOptionsDropdownListItem";
import BlockOptionsDropdownList from "./BlockOptionsDropdownList/BlockOptionsDropdownList";
import ToolbarItem from "./ToolbarItem/ToolbarItem";

const ToolbarPlugin2 = () => {
    const [editor] = useLexicalComposerContext();

    const toolbarReference = useRef(null);

    useEffect(() => {}, [editor]);

    return (
        <div ref={toolbarReference} className="toolbar">
            <div className="toolbar-section">
                <button className="toolbar-item">
                    <UndoIcon className="toolbar-item-icon" />
                </button>
                <button className="toolbar-item">
                    <RedoIcon className="toolbar-item-icon" />
                </button>
            </div>
            <div className="toolbar-separator"></div>
            <div className="toolbar-section">
                <BlockOptionsDropdownListItem>
                    <BlockOptionsDropdownList />
                </BlockOptionsDropdownListItem>

                <ToolbarItem editor={editor} action="bold">
                    <BoldFormatIcon className="toolbar-item-icon" />
                </ToolbarItem>
            </div>
        </div>
    )
}

export default ToolbarPlugin2;