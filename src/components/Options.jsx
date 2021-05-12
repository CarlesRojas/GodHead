import React, { useContext } from "react";
import { isMobile } from "react-device-detect";
import classnames from "classnames";

// Contexts
import { Utils } from "contexts/Utils";
import { Data } from "contexts/Data";

// Components
import Paper from "components/Paper";
import SearchBar from "./SearchBar";

export default function Options() {
    // Contexts
    const { setCookie } = useContext(Utils);
    const { separateByDLC, setSeparateByDLC, gameFont, setGameFont } = useContext(Data);

    // #################################################
    //   METHODS
    // #################################################

    // Toggle dlc separation
    const toggleDLCSeparation = () => {
        setCookie("godhead_separateByDLC", separateByDLC ? "false" : "true");
        setSeparateByDLC(!separateByDLC);
    };

    // Toggle game font
    const toggleGameFont = () => {
        setCookie("godhead_gameFont", gameFont ? "false" : "true");
        setGameFont(!gameFont);
    };

    // #################################################
    //   RENDER
    // #################################################

    if (isMobile) var searchBar = null;
    else searchBar = <SearchBar></SearchBar>;

    return (
        <div className="options">
            {searchBar}
            <div className={classnames("paperContainer", { desktop: !isMobile })}>
                <Paper>
                    <p className="title">OPTIONS</p>

                    <div className={classnames("option", { desktop: !isMobile })} onClick={toggleGameFont}>
                        <p className="name">GAME FONT</p>
                        <p className="state">{gameFont ? "ON" : "OFF"}</p>
                    </div>

                    <div className={classnames("option", { desktop: !isMobile })} onClick={toggleDLCSeparation}>
                        <p className="name">GROUPED BY DLC</p>
                        <p className="state">{separateByDLC ? "ON" : "OFF"}</p>
                    </div>
                </Paper>
            </div>
        </div>
    );
}
