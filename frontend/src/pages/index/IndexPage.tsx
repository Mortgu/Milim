import React, {useEffect} from "react";

const IndexPage = ({setShowNavigation}: any) => {
    useEffect(() => {
        setShowNavigation(true);
    }, []);

    return (
        <React.Fragment>
            <div className="section">
                <div className="section-separator">
                    <p>Recently added</p>
                </div>
                <div className="section-content"></div>
            </div>
            <div className="page">
            </div>
        </React.Fragment>
    )
}

export default IndexPage;