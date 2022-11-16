import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import { convertHTMLToJSON } from "../../../../utils/EditorFunctions";
import {useState} from "react";

const Renderer = () => {
    const [editor] = useLexicalComposerContext();

    const [data, setData] = useState(null);

    const toJson = () => {
        const json = convertHTMLToJSON(
            <div className="test">
                <h1 contentEditable className="paragraph-test">test</h1>
                <p contentEditable className="paragraph-test">test</p>
            </div>
        );

        setData(json);
    }

    return (
        <div className="app">
            <h1>test</h1>
            <p></p>
            <button onClick={toJson}>To JSON</button>
            {data}
        </div>
    )
}

export default Renderer;