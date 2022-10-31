import "./Toolbar.scss";

import {useCallback, useEffect, useRef, useState} from "react";

import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import {$getSelection, $isRangeSelection} from "lexical";
import { mergeRegister } from "@lexical/utils";
import { $isListNode } from "@lexical/list";

import BoldFormatIcon from '@material-ui/icons/FormatBold';
import ItalicFormatIcon from '@material-ui/icons/FormatItalic';
import UnderlinedFormatIcon from '@material-ui/icons/FormatUnderlined';

import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import BlockOptionsDropdown from "./BlockOptionsDropdownList/BlockOptionsDropdown";
import BlockOptionsDropdownList from "./BlockOptionsDropdownList/BlockOptionsDropdownList";
import ToolbarItem from "./ToolbarItem/ToolbarItem";

const ToolbarPlugin2 = () => {
    const [editor] = useLexicalComposerContext();

    const [blockType, setBlockType] = useState("paragraph");

    const [isBold, setIsBold] = useState(false);
    const [isItalic, setIsItalic] = useState(false);
    const [isUnderlined, setIsUnderlined] = useState(false);

    const toolbarReference = useRef(null);

    const updateToolbar = useCallback(() => {
        const selection = $getSelection();

        if ($isRangeSelection(selection)) {
            setIsBold(selection.hasFormat("bold"));
            setIsItalic(selection.hasFormat("italic"));
            setIsUnderlined(selection.hasFormat("underline"));
        }
    }, [editor]);

    useEffect(() => {
        return mergeRegister(
            editor.registerUpdateListener(({editorState}) => {
               editorState.read(() => {updateToolbar()});
            }),
        );
    }, [editor, updateToolbar]);

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
                <BlockOptionsDropdown>
                    <BlockOptionsDropdownList
                        editor={editor}
                        blockType={blockType}
                    />
                </BlockOptionsDropdown>

                <ToolbarItem editor={editor} action="bold" isActive={isBold}>
                    <BoldFormatIcon className="toolbar-item-icon" />
                </ToolbarItem>
                <ToolbarItem editor={editor} action="italic" isActive={isItalic}>
                    <ItalicFormatIcon className="toolbar-item-icon" />
                </ToolbarItem>
                <ToolbarItem editor={editor} action="underline" isActive={isUnderlined}>
                    <UnderlinedFormatIcon className="toolbar-item-icon" />
                </ToolbarItem>
            </div>
        </div>
    )
}

export default ToolbarPlugin2;