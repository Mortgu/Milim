import ButtonGroup from "../../components/elements/ButtonGroup/ButtonGroup";
import {Outlet} from "react-router-dom";

const SubjectPage = () => {
    return (
        <div>
            <section className="section">
                <div className="section-content">
                    <ButtonGroup />
                </div>
            </section>
            <section className="section">
                <div className="section-separator">
                    <p>Kürzlich hinzugefügt</p>
                </div>
                <div className="section-content"></div>
            </section>
            <Outlet />
        </div>
    )
}

export default SubjectPage;
