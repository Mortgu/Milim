import {Outlet, useParams} from "react-router-dom";
import {useEffect} from "react";
import Sidebar from "../../../components/widgets/Sidebar/Sidebar";

const SubjectSubpage = ({setShowNavigation}: any) => {
    const {subject} = useParams();

    useEffect(() => {
        setShowNavigation(true);
    }, []);

    return (
        <div className="page-flex">
            <Sidebar title={subject}/>
            <Outlet/>
        </div>
    );
}

export default SubjectSubpage;