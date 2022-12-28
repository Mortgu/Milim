import React, {useState} from "react";

import "./AddDraftModal.scss";
import SendIcon from "@material-ui/icons/Edit";
import SelectInput, {SelectOption} from "../../SelectInput/SelectInput";
import {useGlobalModalContext} from "../GlobalModal";

const DraftSettingsModal = () => {
    const { store } = useGlobalModalContext();
    const { modalProps } = store || {};
    const { type, styles } = modalProps || { };

    // @ts-ignore
    return (
        <div className="add-draft-modal" style={styles}>
            
        </div>
    )
}

export default DraftSettingsModal;