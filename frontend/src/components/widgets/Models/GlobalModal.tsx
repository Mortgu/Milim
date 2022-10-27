import {createContext, useContext, useState} from "react";

import "./GlobalModal.scss";


export const MODAL_TYPES = {
    LOGIN_MODAL: "LOGIN_MODAL",
    SIGNUP_MODAL: "SIGNUP_MODAL",

    ADD_ANIME_MODAL: "ADD_ANIME_MODAL",

    SEARCH_MODAL: "SEARCH_MODAL",
}

const MODAL_COMPONENTS: any = { }

type T_GlobalModalContext = {
    showModal: (modalType: string, modalProps?: any) => void,
    hideModal: () => void,
    store: any
}

const initialState: T_GlobalModalContext = {
    showModal: () => {},
    hideModal: () => {},
    store: {},
}

const GlobalModalContext = createContext(initialState);
export const useGlobalModalContext = () => useContext(GlobalModalContext);

export const GlobalModal = ({ children }: any) => {
    const [store, setStore] = useState({});
    const { modalType, modalProps }: any = store || {};

    const [isClosing, setIsClosing] = useState(false);

    const showModal = (modalType: string, modalProps: any = {}) => {
        setStore({...store, modalType, modalProps});
    } 

    const hideModal = () => {
        setIsClosing(true)
        setTimeout(() => {
            setStore({...store, modalType: null, modalProps: {}});

            setIsClosing(false)
        }, 300);
    } 

    const renderComponent = () => {
        const ModalComponent = MODAL_COMPONENTS[modalType];

        if (!modalType || !ModalComponent)
            return null;

        return (
            <div className={isClosing ? "modal-wrapper fadeOut" : "modal-wrapper"}>
                <div onClick={hideModal} className="modal-background"></div>
                <div className="modal">
                    <div className="modal-head">
                        {/*  <h3 className="modal-title">{modalProps.title}</h3>*/}
                        {/* <button type="button" className="modal-close" onClick={hideModal}>
                            <CloseIcon className="close-icon"></CloseIcon>
                        </button>*/}
                    </div>
                    <div className="modal-content">
                        <ModalComponent id="global-modal" {...modalProps} />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <GlobalModalContext.Provider value={{ store, showModal, hideModal }}>
            {renderComponent()}
            {children}
        </GlobalModalContext.Provider>
    );
}