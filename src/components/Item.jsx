import React, { useContext, useEffect, useRef } from "react";
import { isMobile } from "react-device-detect";
import classnames from "classnames";

// Contexts
import { Data } from "contexts/Data";
import { Icons } from "contexts/Icons";

// Components
import Paper from "components/Paper";

// JSONs
import itemsJSON from "resources/info/items.json";
import trinketsJSON from "resources/info/trinkets.json";
import cardsJSON from "resources/info/cards.json";

// Icons
import ArrowIcon from "resources/icons/Arrow.svg";

export default function Item() {
    // Contexts
    const { currentItem, gameFont, showMiddle } = useContext(Data);
    const { ITEMS, TRINKETS, CARDS } = useContext(Icons);

    // Description ref
    const descriptionRef = useRef(null);

    // #################################################
    //   COMPONENT MOUNT
    // #################################################

    // On componente mount
    useEffect(() => {
        if (descriptionRef.current) descriptionRef.current.scrollTo({ top: 0 });
    }, [currentItem]);

    // #################################################
    //   RENDER
    // #################################################

    // Cards
    if (currentItem.includes("c")) {
        var info = cardsJSON[currentItem];
        var icon = CARDS[currentItem];
        var type = "Consumable";
    }

    // Trinkets
    else if (currentItem.includes("t")) {
        info = trinketsJSON[currentItem];
        icon = TRINKETS[currentItem];
        type = "Trinket";
    }

    // Items
    else {
        info = itemsJSON[currentItem];
        icon = ITEMS[currentItem];
        type = info.itemType;
    }

    // Unlock
    if ("unlock" in info)
        var unlock = (
            <p className={classnames("unlock", { gameFont: gameFont }, { desktop: !isMobile })}>
                <span>Unlock:</span> {info.unlock}
            </p>
        );
    else unlock = null;

    // recharge Time
    if ("rechargeTime" in info)
        var rechargeTime = (
            <p className={classnames("rechargeTime", { gameFont: gameFont }, { desktop: !isMobile })}>
                <span>Recharge Time:</span> {info.rechargeTime}
            </p>
        );
    else rechargeTime = null;

    // Item Pool
    if ("pool" in info)
        var pool = (
            <p className={classnames("pool", { gameFont: gameFont }, { desktop: !isMobile })}>
                <span>Item Pool:</span> {info.pool.join(", ")}
            </p>
        );
    else pool = null;

    return (
        <div className="item">
            <div className={classnames("paperContainer", { desktop: !isMobile })}>
                <Paper>
                    <div className="description" ref={descriptionRef}>
                        <div className="content">
                            <img src={icon} alt="" className="itemIcon" />
                            <p className={classnames("title", { desktop: !isMobile })}>{info.title}</p>
                            <p className={classnames("subtitle", { desktop: !isMobile })}>"{info.subtitle}"</p>
                            {info.description.map((sentence, i) => {
                                return (
                                    <p className={classnames("description", { gameFont: gameFont }, { desktop: !isMobile })} key={i}>
                                        {sentence}
                                    </p>
                                );
                            })}
                            <div className="grow"></div>
                            <p className={classnames("type", { desktop: !isMobile })}>{type}</p>
                            {unlock}
                            {rechargeTime}
                            {pool}
                        </div>
                    </div>
                </Paper>
            </div>

            <div className="back">
                <div className="backButton" onClick={showMiddle}>
                    <img src={ArrowIcon} alt="" className="icon" />
                    <p className="text">back</p>
                </div>
            </div>
        </div>
    );
}
