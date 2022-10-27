import ButtonGroup from "../../components/elements/ButtonGroup/ButtonGroup";
import {Outlet} from "react-router-dom";
import {useEffect} from "react";

const SubjectPage = ({setShowNavigation}: any) => {

    useEffect(() => {
        setShowNavigation(true);
    }, []);

    return (
        <div className="">
            <div className="section">
                <div className="section-separator">
                    <p>Drafts</p>
                </div>
                <div className="section-content"></div>
            </div>
            <div className="page">
                <section className="section">
                    <div className="section-content">
                        <ButtonGroup />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default SubjectPage;
