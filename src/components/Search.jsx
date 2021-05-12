import React from "react";
import { isMobile } from "react-device-detect";
import classnames from "classnames";

// Components
import Items from "components/Items";
import SearchBar from "components/SearchBar";

export default function Search() {
    // #################################################
    //   METHODS
    // #################################################

    // #################################################
    //   RENDER
    // #################################################

    return (
        <div className="search">
            <SearchBar></SearchBar>
            <div className={classnames("paperContainer", { desktop: !isMobile })}>
                <Items useSearch={false} startEmpty={true}></Items>
            </div>
        </div>
    );
}
