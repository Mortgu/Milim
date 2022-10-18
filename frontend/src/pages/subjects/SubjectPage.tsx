import ButtonGroup from "../../components/elements/ButtonGroup/ButtonGroup";
import {Outlet} from "react-router-dom";
import {useEffect} from "react";

const SubjectPage = ({setShowNavigation}: any) => {

    useEffect(() => {
        setShowNavigation(true);
    }, []);

    return (
        <div className="page">
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
        </div>
    )
}

export default SubjectPage;
