import React, { useContext, useRef, useState, useEffect } from "react";
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

// JSONs
import itemsJSON from "resources/info/items.json";
import trinketsJSON from "resources/info/trinkets.json";
import cardsJSON from "resources/info/cards.json";

export default function SearchBar() {
    // Contexts
    const { currSearchText, setItemsInSearch, gameFont } = useContext(Data);

    // Input placeholder
    const [inputPlaceholder, setInputPlaceholder] = useState("search");

    // Searched text
    const [searchText, setSearchText] = useState("");

    // #################################################
    //   METHODS
    // #################################################

    // Search input ref
    const inputRef = useRef(null);

    // On search icon clicked
    const iconClicked = () => {
        clearSearch();
        if (inputRef.current) inputRef.current.focus();
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
            search(currSearchText.current);
        }, 500);
    };

    // Search for an item
    const search = (query) => {
        // Lowercase query
        query = query.toLowerCase();

        // Array of items in the search
        var itemsInQuery = [];

        if (query.length > 0) {
            // Search in items
            for (const [key, value] of Object.entries(itemsJSON)) {
                // Found in the title
                if ("title" in value && value.title.toLowerCase().includes(query)) {
                    itemsInQuery.push(key);
                    continue;
                }

                // Found in the subtitle
                if ("subtitle" in value && value.subtitle.toLowerCase().includes(query)) itemsInQuery.push(key);
            }

            // Search in trinkets
            for (const [key, value] of Object.entries(trinketsJSON)) {
                // Found in the title
                if ("title" in value && value.title.toLowerCase().includes(query)) {
                    itemsInQuery.push(key);
                    continue;
                }

                // Found in the subtitle
                if ("subtitle" in value && value.subtitle.toLowerCase().includes(query)) itemsInQuery.push(key);
            }

            // Search in cards
            for (const [key, value] of Object.entries(cardsJSON)) {
                // Found in the title
                if ("title" in value && value.title.toLowerCase().includes(query)) {
                    itemsInQuery.push(key);
                    continue;
                }

                // Found in the subtitle
                if ("subtitle" in value && value.subtitle.toLowerCase().includes(query)) itemsInQuery.push(key);
            }
        }

        // Set items in search
        setItemsInSearch(itemsInQuery);
    };

    // Clear the search
    const clearSearch = () => {
        setSearchText("");
        currSearchText.current = "";

        clearTimeout(filterTimeout.current);

        filterTimeout.current = setTimeout(() => {
            // Search for items
            search("");
        }, 500);
    };

    // Focus timeout
    const focusTimeout = useRef(null);

    // Focus search
    const focusSearch = () => {
        clearTimeout(focusTimeout.current);

        focusTimeout.current = setTimeout(() => {
            if (inputRef.current) inputRef.current.focus();
        }, 200);
    };

    // #################################################
    //   COMPONENT MOUNT
    // #################################################

    // On componente mount
    useEffect(() => {
        // Subscribe to events
        window.PubSub.sub("onClearSearch", clearSearch);
        window.PubSub.sub("onFocusSearch", focusSearch);

        // Unsubscribe from events
        return () => {
            window.PubSub.unsub("onClearSearch", clearSearch);
            window.PubSub.sub("onFocusSearch", focusSearch);

            clearTimeout(filterTimeout.current);
            clearTimeout(focusTimeout.current);
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // #################################################
    //   RENDER
    // #################################################

    return (
        <div className="searchBar">
            <div className={classnames("grid", { desktop: !isMobile })}>
                <img src={Left} alt="" className="side" />
                <div className="middle"></div>
                <img src={Right} alt="" className="side" />
            </div>

            <div className={classnames("children", { desktop: !isMobile })}>
                <input
                    type="text"
                    placeholder={inputPlaceholder}
                    spellCheck="false"
                    value={searchText}
                    onChange={onTextChange}
                    onFocus={() => setInputPlaceholder("")}
                    onBlur={() => setInputPlaceholder("search")}
                    ref={inputRef}
                    className={classnames({ gameFont: gameFont })}
                />
                <img src={searchText === "" ? SearchIcon : CrossIcon} alt="" className={classnames("icon", { active: searchText !== "" })} onClick={iconClicked} />
            </div>
        </div>
    );
}
