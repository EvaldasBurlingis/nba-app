import React from "react";

const TeamModalHeader = ({ handleClose }) => {
    return (
        <div>
            <button onClick={handleClose}>X</button>
        </div>
    )
}

export default TeamModalHeader