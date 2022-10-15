import {useEffect} from "react";

const IndexPage = ({setShowNavigation}: any) => {
    useEffect(() => {
        setShowNavigation(true);
    }, []);

    return (
        <p>index</p>
    )
}

export default IndexPage;