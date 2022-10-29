import React, {useEffect} from "react";

const SubjectPage = ({setShowNavigation}: any) => {

    useEffect(() => {
        setShowNavigation(true);
    }, []);

    return (
        <div className="">
            <div className="page-navigation">
                <div className="page-navigation-items">
                    <p className="page-navigation-item active">Drafts</p>
                </div>
            </div>
            <div className="page">
            </div>
        </div>
    )
}

export default SubjectPage;
