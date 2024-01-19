import "./buttonHoverBell.css";
import { FaRegBell } from "react-icons/fa";
function ButtonHoverBell({ callBack, title }) {
    return (
        <>
            <div className="btn-hover-bell" onClick={callBack}>
                <div className="shake-bell"><FaRegBell /></div>
                <span className="btn-title-bel">{title}</span>
            </div>
        </>
    );
}

export default ButtonHoverBell;
