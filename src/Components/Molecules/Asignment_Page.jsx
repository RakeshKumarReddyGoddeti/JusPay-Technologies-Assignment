import Button from "../Atoms/Button";
import { useNavigate } from 'react-router-dom';

import "../../Styles/assignment_page.css";

function Assignment_Page() {

    const navigate = useNavigate();

    return (
        <div className="assignment_page">

            <Button btnClass="assignment_button" aria-label="Assignment" onClick={() => navigate("/homepage")}> Assignment </Button>
            <h1 className="ui_developer">UI Developer Assignment</h1>
            <p className="company">Company</p>
            <p className="company_name">Juspay Technologies Private Limited</p>
            <p className="vector_rectangles">
                {
                    Array.from({length: 81}).map((_, index) => (
                        <div key={index} className="rectangle"></div>
                    ))
                }
            </p>
            <img className="ellipse_1" src="/Ellipse1.png" alt="ellipse1" />
            <img className="ellipse_2" src="/Ellipse1.png" alt="ellipse2" />
        </div>
    );
}

export default Assignment_Page;