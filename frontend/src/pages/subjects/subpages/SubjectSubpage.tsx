import {useParams} from "react-router-dom";
import {useEffect} from "react";
import Sidebar from "../../../components/widgets/Sidebar/Sidebar";

const SubjectSubpage = ({setShowNavigation}: any) => {
    const { subject } = useParams();

    useEffect(() => {
        setShowNavigation(true);
    }, []);

    return (
        <Sidebar title={subject} />
    );
}

export default SubjectSubpage;