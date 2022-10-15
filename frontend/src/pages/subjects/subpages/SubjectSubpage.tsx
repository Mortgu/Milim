import {useParams} from "react-router-dom";
import {useEffect} from "react";

const SubjectSubpage = ({setShowNavigation}: any) => {
    const { subject } = useParams();

    useEffect(() => {
        setShowNavigation(true);
    }, []);

    return (
        <>{subject}</>
    );
}

export default SubjectSubpage;