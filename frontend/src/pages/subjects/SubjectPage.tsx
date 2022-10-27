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
            </div>
        </div>
    )
}

export default SubjectPage;
