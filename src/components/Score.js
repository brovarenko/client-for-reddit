import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp, faArrowAltCircleDown } from '@fortawesome/free-regular-svg-icons';

const Score = ({score}) => {
    return (
        <div className="score">
            <div className="srore-button">
            <FontAwesomeIcon className="arrow" icon={faArrowAltCircleUp} />
            </div>
            <div>
            {score}
            </div>
            <div className="srore-button">
            <FontAwesomeIcon className="arrow" icon={faArrowAltCircleDown} />
            </div>
        </div>
    )
}

export default Score;