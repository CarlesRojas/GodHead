import React, { useContext, useRef, useState } from "react";
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
import ArrowIcon from "resources/icons/Arrow.png";

export default function Items() {
    // Contexts
    const { separateByDLC, showRight, showBottom, setCurrentItem } = useContext(Data);
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
        var section = document.getElementById(sectionName);
        var arrow = document.getElementById(`${sectionName}_arrow`);

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
        setCurrentItem(id);
        showRight();
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
        var content = (
            <div className="list" ref={listRef} onScroll={onListScroll}>
                {dlcOrder.current.map((name, i) => {
                    const order = expansionJSON[name];
                    return (
                        <React.Fragment key={i}>
                            <div className="titleContainer" onClick={() => openCloseSection(name)}>
                                <img id={`${name}_arrow`} src={ArrowIcon} alt="" className="arrow" />
                                <p className="title">{name}</p>
                                <div className="filler"></div>
                            </div>

                            <div id={name} className="itemsContainer">
                                {order.map((id, j) => {
                                    if (id.includes("c")) return <img src={CARDS[id]} alt="" className="itemIcon" key={j} onClick={() => onItemClicked(id)} />;
                                    else if (id.includes("t")) return <img src={TRINKETS[id]} alt="" className="itemIcon" key={j} onClick={() => onItemClicked(id)} />;
                                    else return <img src={ITEMS[id]} alt="" className="itemIcon" key={j} onClick={() => onItemClicked(id)} />;
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
        content = (
            <div className="list" ref={listRef} onScroll={onListScroll}>
                <div className="titleContainer" onClick={() => openCloseSection("items")}>
                    <img id={"items_arrow"} src={ArrowIcon} alt="" className="arrow" />
                    <p className="title">Items</p>
                    <div className="filler"></div>
                </div>
                <div id={"items"} className="itemsContainer">
                    {coloredItemsJSON.map((id, j) => {
                        return <img src={ITEMS[id]} alt="" className="itemIcon" key={j} onClick={() => onItemClicked(id)} />;
                    })}
                </div>

                <div className="titleContainer" onClick={() => openCloseSection("trinkets")}>
                    <img id={"trinkets_arrow"} src={ArrowIcon} alt="" className="arrow" />
                    <p className="title">Trinkets</p>
                    <div className="filler"></div>
                </div>
                <div id={"trinkets"} className="itemsContainer">
                    {coloredTrinketsJSON.map((id, j) => {
                        return <img src={TRINKETS[id]} alt="" className="itemIcon" key={j} onClick={() => onItemClicked(id)} />;
                    })}
                </div>

                <div className="titleContainer" onClick={() => openCloseSection("cards")}>
                    <img id={"cards_arrow"} src={ArrowIcon} alt="" className="arrow" />
                    <p className="title">Cards</p>
                    <div className="filler"></div>
                </div>
                <div id={"cards"} className="itemsContainer">
                    {coloredCardsJSON.map((id, j) => {
                        return <img src={CARDS[id]} alt="" className="itemIcon" key={j} onClick={() => onItemClicked(id)} />;
                    })}
                </div>
            </div>
        );
    }

    return (
        <div className="items">
            <div className="paperContainer">
                <Paper>
                    {content}
                    <div className={classnames("goToTop", { hide: isOnTop })} onClick={goToTop}>
                        <img src={ArrowIcon} alt="" className="icon" />
                    </div>
                </Paper>
            </div>

            <div className="scan">
                <div className="scanButton" onClick={showBottom}>
                    <img src={ArrowIcon} alt="" className="icon" />
                    <p className="text">scan</p>
                </div>
            </div>
        </div>
    );
}
