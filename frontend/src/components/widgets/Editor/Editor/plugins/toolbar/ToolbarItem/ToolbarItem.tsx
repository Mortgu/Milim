import {FORMAT_TEXT_COMMAND, TextFormatType} from "lexical";

interface ToolbarItemProps {
    editor: any,
    action: TextFormatType,
    isActive: Boolean,
    children: any
}

const ToolbarItem = ({editor, action, isActive, children}: ToolbarItemProps) => {
    return (
        <button className={"toolbar-item " + `format-${action} ` + (isActive ? "active" : "")} onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, action)}>
            {children}
        </button>
    )
}

export default ToolbarItem;