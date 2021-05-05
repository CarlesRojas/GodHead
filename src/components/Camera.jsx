import React, { useContext } from "react";

// Components
import Paper from "components/Paper";

// Contexts
import { Data } from "contexts/Data";

// Icons
import ArrowIcon from "resources/icons/Arrow.png";

export default function Camera() {
    // Contexts
    const { showTop } = useContext(Data);

    return (
        <div className="camera">
            <div className="paperContainer">
                <Paper></Paper>
            </div>

            <div className="browse">
                <div className="browseButton" onClick={showTop}>
                    <img src={ArrowIcon} alt="" className="icon" />
                    <p className="text">browse</p>
                </div>
            </div>
        </div>
    );
}
