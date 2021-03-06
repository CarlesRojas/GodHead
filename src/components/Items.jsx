import React, { useContext, useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import classnames from "classnames";

// Contexts
import { Data } from "contexts/Data";
import { Icons } from "contexts/Icons";

// Components
import Paper from "components/Paper";

import coloredItemsJSON from "resources/info/coloredItems.json";
import coloredTrinketsJSON from "resources/info/coloredTrinkets.json";
import coloredCardsJSON from "resources/info/coloredCards.json";
import expansionJSON from "resources/info/expansion.json";

// Icons
import ArrowIcon from "resources/icons/Arrow.svg";

export default function Items({ useSearch, startEmpty, objectID }) {
    // Contexts
    const { separateByDLC, showTop, setCurrentItem, selectedItem, setSelectedItem, itemsInSearch, currSearchText } = useContext(Data);
    const { ITEMS, TRINKETS, CARDS } = useContext(Icons);

    // #################################################
    //   INFO
    // #################################################

    // Order of Expansions
    const dlcOrder = useRef([
        "Repentance Items",
        "Repentance Trinkets",
        "Afterbirth+ Items",
        "Afterbirth+ Trinkets",
        "Afterbirth Items",
        "Afterbirth Trinkets",
        "Rebirth Items",
        "Rebirth Trinkets",
        "Misc.",
    ]);

    // #################################################
    //   METHODS
    // #################################################

    // Open or close sections
    const openCloseSection = (sectionName) => {
        var section = document.getElementById(`${sectionName}_${objectID}`);
        var arrow = document.getElementById(`${sectionName}_arrow_${objectID}`);

        if (section.classList.contains("closed")) {
            section.classList.remove("closed");
            arrow.classList.remove("closed");
        } else {
            section.classList.add("closed");
            arrow.classList.add("closed");
        }
    };

    // On item clicked
    const onItemClicked = (id) => {
        setSelectedItem(id);
        setCurrentItem(id);
        showTop(false);
    };

    // On item hover in
    const onItemHoverIn = (id) => {
        if (isMobile) return;

        setCurrentItem(id);
    };
    // On item hover out
    const onItemHoverOut = (id) => {
        if (isMobile) return;

        setCurrentItem(selectedItem);
    };

    const listRef = useRef(null);

    // Go to the top of the list
    const goToTop = () => {
        listRef.current.scrollTo({ top: 0, behavior: "smooth" });
    };

    const [isOnTop, setIsOnTop] = useState(true);

    // When there is scroll in the list
    const onListScroll = () => {
        setIsOnTop(listRef.current.scrollTop < 50);
    };

    // #################################################
    //   RENDER
    // #################################################

    // Separate by dlc
    if (separateByDLC) {
        var filteredExpansionJSON = {};

        // Use search
        if ((startEmpty && useSearch) || (useSearch && currSearchText.current.length > 0)) {
            for (const [key, value] of Object.entries(expansionJSON)) filteredExpansionJSON[key] = value.filter((id) => itemsInSearch.includes(id));
        }

        // Do not use search
        else {
            filteredExpansionJSON = { ...expansionJSON };
        }

        var content = (
            <div className={classnames("list", { desktop: !isMobile })} ref={listRef} onScroll={onListScroll}>
                {dlcOrder.current.map((name, i) => {
                    var order = filteredExpansionJSON[name];

                    // Do not return group if it is empty
                    if (order.length <= 0) return null;

                    return (
                        <React.Fragment key={i}>
                            <div className={classnames("titleContainer", { desktop: !isMobile })} onClick={() => openCloseSection(name)}>
                                <img id={`${name}_arrow_${objectID}`} src={ArrowIcon} alt="" className="arrow" />
                                <p className={classnames("title", { desktop: !isMobile })}>{name}</p>
                                <div className="filler"></div>
                            </div>

                            <div id={`${name}_${objectID}`} className="itemsContainer">
                                {order.map((id, j) => {
                                    if (id.includes("c"))
                                        return (
                                            <img
                                                src={CARDS[id]}
                                                alt=""
                                                className={classnames("itemIcon", { desktop: !isMobile }, { clicked: id === selectedItem })}
                                                key={j}
                                                onClick={() => onItemClicked(id)}
                                                onMouseEnter={() => onItemHoverIn(id)}
                                                onMouseLeave={() => onItemHoverOut(id)}
                                            />
                                        );
                                    else if (id.includes("t"))
                                        return (
                                            <img
                                                src={TRINKETS[id]}
                                                alt=""
                                                className={classnames("itemIcon", { desktop: !isMobile }, { clicked: id === selectedItem })}
                                                key={j}
                                                onClick={() => onItemClicked(id)}
                                                onMouseEnter={() => onItemHoverIn(id)}
                                                onMouseLeave={() => onItemHoverOut(id)}
                                            />
                                        );
                                    else
                                        return (
                                            <img
                                                src={ITEMS[id]}
                                                alt=""
                                                className={classnames("itemIcon", { desktop: !isMobile }, { clicked: id === selectedItem })}
                                                key={j}
                                                onClick={() => onItemClicked(id)}
                                                onMouseEnter={() => onItemHoverIn(id)}
                                                onMouseLeave={() => onItemHoverOut(id)}
                                            />
                                        );
                                })}
                            </div>
                        </React.Fragment>
                    );
                })}
            </div>
        );
    }

    // Separate only by type
    else {
        var filteredColoredItemsJSON = [];
        var filteredColoredTrinketsJSON = [];
        var filteredColoredCardsJSON = [];

        // Use search
        if ((startEmpty && useSearch) || (useSearch && currSearchText.current.length > 0)) {
            filteredColoredItemsJSON = coloredItemsJSON.filter((id) => itemsInSearch.includes(id));
            filteredColoredTrinketsJSON = coloredTrinketsJSON.filter((id) => itemsInSearch.includes(id));
            filteredColoredCardsJSON = coloredCardsJSON.filter((id) => itemsInSearch.includes(id));
        }

        // Do not use search
        else {
            filteredColoredItemsJSON = [...coloredItemsJSON];
            filteredColoredTrinketsJSON = [...coloredTrinketsJSON];
            filteredColoredCardsJSON = [...coloredCardsJSON];
        }

        // Items
        var itemsDOM =
            filteredColoredItemsJSON.length <= 0 ? null : (
                <React.Fragment>
                    <div className={classnames("titleContainer", { desktop: !isMobile })} onClick={() => openCloseSection("items")}>
                        <img id={`items_arrow_${objectID}`} src={ArrowIcon} alt="" className="arrow" />
                        <p className={classnames("title", { desktop: !isMobile })}>Items</p>
                        <div className="filler"></div>
                    </div>
                    <div id={`items_${objectID}`} className="itemsContainer">
                        {filteredColoredItemsJSON.map((id, j) => {
                            return (
                                <img
                                    src={ITEMS[id]}
                                    alt=""
                                    className={classnames("itemIcon", { desktop: !isMobile }, { clicked: id === selectedItem })}
                                    key={j}
                                    onClick={() => onItemClicked(id)}
                                    onMouseEnter={() => onItemHoverIn(id)}
                                    onMouseLeave={() => onItemHoverOut(id)}
                                />
                            );
                        })}
                    </div>
                </React.Fragment>
            );

        // Trinkets
        var trinketsDOM =
            filteredColoredTrinketsJSON.length <= 0 ? null : (
                <React.Fragment>
                    <div className={classnames("titleContainer", { desktop: !isMobile })} onClick={() => openCloseSection("trinkets")}>
                        <img id={`trinkets_arrow_${objectID}`} src={ArrowIcon} alt="" className="arrow" />
                        <p className={classnames("title", { desktop: !isMobile })}>Trinkets</p>
                        <div className="filler"></div>
                    </div>

                    <div id={`trinkets_${objectID}`} className="itemsContainer">
                        {filteredColoredTrinketsJSON.map((id, j) => {
                            return (
                                <img
                                    src={TRINKETS[id]}
                                    alt=""
                                    className={classnames("itemIcon", { desktop: !isMobile }, { clicked: id === selectedItem })}
                                    key={j}
                                    onClick={() => onItemClicked(id)}
                                    onMouseEnter={() => onItemHoverIn(id)}
                                    onMouseLeave={() => onItemHoverOut(id)}
                                />
                            );
                        })}
                    </div>
                </React.Fragment>
            );

        var cardsDOM =
            filteredColoredCardsJSON.length <= 0 ? null : (
                <React.Fragment>
                    <div className={classnames("titleContainer", { desktop: !isMobile })} onClick={() => openCloseSection("cards")}>
                        <img id={`cards_arrow_${objectID}`} src={ArrowIcon} alt="" className="arrow" />
                        <p className={classnames("title", { desktop: !isMobile })}>Consumables</p>
                        <div className="filler"></div>
                    </div>

                    <div id={`cards_${objectID}`} className="itemsContainer">
                        {filteredColoredCardsJSON.map((id, j) => {
                            return (
                                <img
                                    src={CARDS[id]}
                                    alt=""
                                    className={classnames("itemIcon", { desktop: !isMobile }, { clicked: id === selectedItem })}
                                    key={j}
                                    onClick={() => onItemClicked(id)}
                                    onMouseEnter={() => onItemHoverIn(id)}
                                    onMouseLeave={() => onItemHoverOut(id)}
                                />
                            );
                        })}
                    </div>
                </React.Fragment>
            );

        content = (
            <div className={classnames("list", { desktop: !isMobile })} ref={listRef} onScroll={onListScroll}>
                {itemsDOM}
                {trinketsDOM}
                {cardsDOM}
            </div>
        );
    }

    return (
        <div className="items">
            <div className={classnames("paperContainer", { desktop: !isMobile }, { hasSearchBar: startEmpty })}>
                <Paper>
                    {content}
                    <div className={classnames("goToTop", { hide: isOnTop }, { desktop: !isMobile })} onClick={goToTop}>
                        <img src={ArrowIcon} alt="" className={classnames("icon", { desktop: !isMobile })} />
                    </div>
                </Paper>
            </div>
        </div>
    );
}
