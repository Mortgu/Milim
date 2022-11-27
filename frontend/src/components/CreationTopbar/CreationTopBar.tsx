import "./CreationTopBar.scss";

import AddIcon from "@material-ui/icons/Add";
import {MODAL_TYPES, useGlobalModalContext} from "../Models/GlobalModal";

const CreationTopBar = () => {
    const {showModal} = useGlobalModalContext();

    const handleAddDraft = () => {
        showModal(MODAL_TYPES.ADD_DRAFT_MODAL, {});

        //socket.emit('notification:new', "test")
    }

    return (
        <div className="creation-top-bar">
            <div onClick={handleAddDraft} className="topBar-cta">
                <div className="content-wrapper">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path fill="#4A5878" className="file_icons--designFilePrimary--2TWAR"
                              d="M7 28H25C25.5523 28 26 27.5523 26 27V9.91421C26 9.649 25.8946 9.39464 25.7071 9.20711L20.7929 4.29289C20.6054 4.10536 20.351 4 20.0858 4H7C6.44772 4 6 4.44772 6 5V27C6 27.5523 6.44772 28 7 28Z"></path>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M16.8582 12.9953L16.8466 12.992L12.4437 11.7366L15.7009 14.9938C15.8169 14.954 15.9412 14.9324 16.0707 14.9324C16.6993 14.9324 17.2089 15.442 17.2089 16.0707C17.2089 16.6993 16.6993 17.2089 16.0707 17.2089C15.442 17.2089 14.9324 16.6993 14.9324 16.0707C14.9324 15.9412 14.954 15.8169 14.9938 15.7009L11.7425 12.4496L12.9443 16.6419L12.9548 16.6784L12.9625 16.7156C13.26 18.1592 14.5397 19.2442 16.0707 19.2442C16.4199 19.2442 16.7541 19.1882 17.0659 19.0854L17.6507 18.8924L18.0862 19.3279L19.3171 20.5588L20.5858 19.2901L19.3411 18.0455L18.9107 17.615L19.0954 17.035C19.1918 16.7321 19.2443 16.4085 19.2443 16.0707C19.2443 14.5951 18.2363 13.3524 16.8699 12.9983L16.8582 12.9953ZM21.2929 18.583L22 19.2901L21.2929 19.9972L20.0242 21.2659L19.3171 21.973L18.61 21.2659L17.3791 20.035C16.9676 20.1708 16.5277 20.2442 16.0707 20.2442C14.0558 20.2442 12.3744 18.8165 11.983 16.9175L10.3246 11.1324L10 10L11.1329 10.323L17.1208 12.0303C18.9175 12.4959 20.2443 14.1283 20.2443 16.0707C20.2443 16.5127 20.1756 16.9386 20.0482 17.3384L21.2929 18.583Z"
                              fill="var(--color-icon-ondesign, white)"></path>
                        <path
                            d="M20.5 8.5V6.41421V4L22.2071 5.70711L24.2929 7.79289L26 9.5H23.5858H21.5C20.9477 9.5 20.5 9.05228 20.5 8.5Z"
                            fill="var(--color-icondesignfilesecondary, #9bd5fd)"></path>
                    </svg>
                    <div className="titleText">
                        <p className="titleText-title">New blank file</p>
                        <p className="titleText-text">Design and prototype</p>
                    </div>
                </div>
                <AddIcon className="add-icon" />
            </div>
            <div className="topBar-cta">
                <div className="content-wrapper">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path fill="#4A5878" className="file_icons--designFilePrimary--2TWAR"
                              d="M7 28H25C25.5523 28 26 27.5523 26 27V9.91421C26 9.649 25.8946 9.39464 25.7071 9.20711L20.7929 4.29289C20.6054 4.10536 20.351 4 20.0858 4H7C6.44772 4 6 4.44772 6 5V27C6 27.5523 6.44772 28 7 28Z"></path>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M16.8582 12.9953L16.8466 12.992L12.4437 11.7366L15.7009 14.9938C15.8169 14.954 15.9412 14.9324 16.0707 14.9324C16.6993 14.9324 17.2089 15.442 17.2089 16.0707C17.2089 16.6993 16.6993 17.2089 16.0707 17.2089C15.442 17.2089 14.9324 16.6993 14.9324 16.0707C14.9324 15.9412 14.954 15.8169 14.9938 15.7009L11.7425 12.4496L12.9443 16.6419L12.9548 16.6784L12.9625 16.7156C13.26 18.1592 14.5397 19.2442 16.0707 19.2442C16.4199 19.2442 16.7541 19.1882 17.0659 19.0854L17.6507 18.8924L18.0862 19.3279L19.3171 20.5588L20.5858 19.2901L19.3411 18.0455L18.9107 17.615L19.0954 17.035C19.1918 16.7321 19.2443 16.4085 19.2443 16.0707C19.2443 14.5951 18.2363 13.3524 16.8699 12.9983L16.8582 12.9953ZM21.2929 18.583L22 19.2901L21.2929 19.9972L20.0242 21.2659L19.3171 21.973L18.61 21.2659L17.3791 20.035C16.9676 20.1708 16.5277 20.2442 16.0707 20.2442C14.0558 20.2442 12.3744 18.8165 11.983 16.9175L10.3246 11.1324L10 10L11.1329 10.323L17.1208 12.0303C18.9175 12.4959 20.2443 14.1283 20.2443 16.0707C20.2443 16.5127 20.1756 16.9386 20.0482 17.3384L21.2929 18.583Z"
                              fill="var(--color-icon-ondesign, white)"></path>
                        <path
                            d="M20.5 8.5V6.41421V4L22.2071 5.70711L24.2929 7.79289L26 9.5H23.5858H21.5C20.9477 9.5 20.5 9.05228 20.5 8.5Z"
                            fill="var(--color-icondesignfilesecondary, #9bd5fd)"></path>
                    </svg>
                    <div className="titleText">
                        <p className="titleText-title">New design file</p>
                        <p className="titleText-text">Design and prototype</p>
                    </div>
                </div>
                <AddIcon className="add-icon" />
            </div >
            <div className="topBar-cta">
                <div className="content-wrapper">
                    <svg className="svg" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1 17V1h7v1H2v14h14v-6h1v7H1zm8.5-4.793l-.354-.353-2.5-2.5.708-.708L9 10.293V8c0-3.776 3.224-7 7-7h1v1h-1c-3.224 0-6 2.776-6 6v2.293l1.646-1.647.708.708-2.5 2.5-.354.353z"
                            fillRule="nonzero" fillOpacity="1" fill="white" stroke="none"></path>
                    </svg>
                    <div className="titleText">
                        <p className="titleText-title">Import from Image</p>
                        <p className="titleText-text">Use Images to create draft</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreationTopBar;