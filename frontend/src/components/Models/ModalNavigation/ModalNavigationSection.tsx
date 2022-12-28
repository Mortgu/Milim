import {FC} from "react";

const ModalNavigationSection: FC<any> = ({ children, displayName }) => {

    return (
        <section className="modal-navigation-section">
            {children}
        </section>
    )
}

export default ModalNavigationSection;