import {useEffect} from "react";

const IndexPage = ({setShowNavigation}: any) => {
    useEffect(() => {
        setShowNavigation(true);
    }, []);

    return (
        <div className="page">
            <p>index</p>
        </div>
    )
}

export default IndexPage;