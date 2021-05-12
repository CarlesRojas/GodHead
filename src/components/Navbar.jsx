import React, { useContext } from "react";
import classnames from "classnames";

// Contexts
import { Data } from "contexts/Data";

// Icons
import OptionsIcon from "resources/icons/Options.svg";
import ItemsIcon from "resources/icons/Items.svg";
import SearchIcon from "resources/icons/Search.svg";

export default function Navbar() {
    const { showLeft, showMiddle, showRight, horizontalPos } = useContext(Data);

    // #################################################
    //   RENDER
    // #################################################

    return (
        <div className="navbar">
            <img src={OptionsIcon} alt="" className={classnames("icon", { selected: horizontalPos === "left" })} onClick={showLeft} />
            <img src={ItemsIcon} alt="" className={classnames("icon", "bigger", { selected: horizontalPos === "middle" })} onClick={showMiddle} />
            <img src={SearchIcon} alt="" className={classnames("icon", { selected: horizontalPos === "right" })} onClick={showRight} />
        </div>
    );
}
