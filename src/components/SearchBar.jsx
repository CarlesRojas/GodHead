import React, { useContext, useRef } from "react";
import classnames from "classnames";
import { isMobile } from "react-device-detect";

// Contexts
import { Data } from "contexts/Data";

// Images
import Left from "resources/background/SearchLeft.svg";
import Right from "resources/background/SearchRight.svg";

// Icons
import CrossIcon from "resources/icons/Cross.svg";
import SearchIcon from "resources/icons/Search.svg";

export default function SearchBar() {
    // Contexts
    const { currSearchText, searchText, setSearchText, itemsInSearch, setItemsInSearch, gameFont } = useContext(Data);

    // #################################################
    //   METHODS
    // #################################################

    // Search input ref
    const inputRef = useRef(null);

    // On search icon clicked
    const iconClicked = () => {
        if (searchText === "") {
            inputRef.current.focus();
            return;
        }

        setSearchText("");
        currSearchText.current = "";
    };

    // Apply filter timeout
    const filterTimeout = useRef(null);

    // On text change
    const onTextChange = (event) => {
        // Set value
        setSearchText(event.target.value);
        currSearchText.current = event.target.value;

        clearTimeout(filterTimeout.current);

        filterTimeout.current = setTimeout(() => {
            // Search for items
            console.log(`Search ${currSearchText.current}`);
        }, 500);
    };

    // #################################################
    //   RENDER
    // #################################################

    return (
        <div className="searchBar">
            <div className="grid">
                <img src={Left} alt="" className="side" />
                <div className="middle"></div>
                <img src={Right} alt="" className="side" />
            </div>

            <div className={classnames("children", { desktop: !isMobile })}>
                <input type="text" placeholder="search" spellCheck="false" value={searchText} onChange={onTextChange} ref={inputRef} className={classnames({ gameFont: gameFont })} />
                <img src={searchText === "" ? SearchIcon : CrossIcon} alt="" className={classnames("icon", { active: searchText !== "" })} onClick={iconClicked} />
            </div>
        </div>
    );
}
