import React, {FC, useEffect} from "react";

import "./ModalNavigation.scss";

const ModalNavigation: FC<any> = ({children}) => {

    useEffect(() => {
        document.querySelectorAll('.modal-navigation .modal-navigation-cta')[0].classList.add('active');
    }, []);

    return (
        <React.Fragment>
            <div className="modal-navigation">
                {children.map((child: any, index: number) => {
                    console.log(child)
                    return (
                        <button key={index} className="modal-navigation-cta">
                            {child.props.displayName}
                        </button>
                    )
                })}
            </div>
            <div className="DraftSettingsModal-content">
                {children}
            </div>
        </React.Fragment>
    )
}

export default ModalNavigation;