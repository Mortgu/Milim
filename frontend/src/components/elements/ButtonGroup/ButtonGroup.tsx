import {Link} from "react-router-dom";

import "./ButtonGroup.scss";

import ArrowIcon from "@material-ui/icons/TrendingFlat";

const ButtonGroup = () => {
    return (
        <div className="button-group">
            <Link className="button group-item" to="/subjects/german">
                <p className="text">Deutsch</p>
                <ArrowIcon />
            </Link>
            <Link className="button group-item" to="/subjects/german">
                <p className="text">Englisch</p>
                <ArrowIcon />
            </Link>
        </div>
    )
}

export default ButtonGroup;