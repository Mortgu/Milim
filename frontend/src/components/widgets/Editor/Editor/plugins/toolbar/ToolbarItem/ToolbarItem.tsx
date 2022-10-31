import {FORMAT_TEXT_COMMAND} from "lexical";
import BoldFormatIcon from "@material-ui/icons/FormatBold";
import {useState} from "react";

const ToolbarItem = ({editor, action, children}: any) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <button className={"toolbar-item " + `format-${action}` + (isActive ? "active" : "")} onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, action)}>
            {children}
        </button>
    )
}

export default ToolbarItem;