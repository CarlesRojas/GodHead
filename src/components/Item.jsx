import React, { useContext } from "react";

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
import ArrowIcon from "resources/icons/Arrow.png";

export default function Item() {
    // Contexts
    const { currentItem, gameFont, showMiddle } = useContext(Data);
    const { ITEMS, TRINKETS, CARDS } = useContext(Icons);

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
            <p className={"unlock" + (gameFont ? " gameFont" : "")}>
                <span>Unlock:</span> {info.unlock}
            </p>
        );
    else unlock = null;

    // recharge Time
    if ("rechargeTime" in info)
        var rechargeTime = (
            <p className={"rechargeTime" + (gameFont ? " gameFont" : "")}>
                <span>Recharge Time:</span> {info.rechargeTime}
            </p>
        );
    else rechargeTime = null;

    // Item Pool
    if ("pool" in info)
        var pool = (
            <p className={"pool" + (gameFont ? " gameFont" : "")}>
                <span>Item Pool:</span> {info.pool.join(", ")}
            </p>
        );
    else pool = null;

    return (
        <div className="item">
            <div className="paperContainer">
                <Paper>
                    <div className="description">
                        <div className="content">
                            <img src={icon} alt="" className="itemIcon" />
                            <p className="title">{info.title}</p>
                            <p className="subtitle">"{info.subtitle}"</p>
                            {info.description.map((sentence, i) => {
                                return (
                                    <p className={"description" + (gameFont ? " gameFont" : "")} key={i}>
                                        {sentence}
                                    </p>
                                );
                            })}
                            <div className="grow"></div>
                            <p className="type">{type}</p>
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
