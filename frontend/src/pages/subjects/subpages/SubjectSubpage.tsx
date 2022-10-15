import {useParams} from "react-router-dom";

const SubjectSubpage = () => {
    const { subject } = useParams();

    return (
        <>{subject}</>
    );
}

export default SubjectSubpage;