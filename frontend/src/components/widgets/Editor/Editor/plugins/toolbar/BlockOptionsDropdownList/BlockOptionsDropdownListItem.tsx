import {$createParagraphNode, $getSelection, $isRangeSelection} from "lexical";
import { $createHeadingNode } from "@lexical/rich-text";

import {$wrapNodes} from "@lexical/selection";
import {$generateHtmlFromNodes} from '@lexical/html';

const BlockOptionsDropdownListItem = ({ editor, blockType, formatAction, children }: any) => {

    const formatActions = [
        {formatAction: "paragraph", action: $createParagraphNode, props: null},
        {formatAction: "h1", action: $createHeadingNode, props: "h1"},
        {formatAction: "h2", action: $createHeadingNode, props: "h2"},
        {formatAction: "h3", action: $createHeadingNode, props: "h3"}
    ]

    const handleFormat = () => {
        if (blockType !== formatAction) {
            editor.update(() => {
                const selection = $getSelection();

                if ($isRangeSelection(selection)) {
                    const { action, props } = formatActions.filter(element => element.formatAction === formatAction)[0];
                    if (props != null) {
                        // @ts-ignore
                        $wrapNodes(selection, () => action(props));
                    } else if (props == null) {
                        $wrapNodes(selection, () => action());
                    }
                }
            })
        }
    }

    return (
        <button className="dropdown-item" onClick={handleFormat}>
            {children}
        </button>
    )
}

export default BlockOptionsDropdownListItem;