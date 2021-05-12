import React, { createContext, useState, useRef } from "react";
import { useSpring } from "react-spring";

// Data Context
export const Data = createContext();

const DataProvider = (props) => {
    // #################################################
    //   PAGE NAVIGATION
    // #################################################

    // Current horizontal position: "left" "middle" "right"
    const currHorizontalPos = useRef("middle");
    const [horizontalPos, setHorizontalPos] = useState("middle");

    // Current vertical position: "top" "bottom"
    const currVerticalPos = useRef("bottom");
    const [verticalPos, setVerticalPos] = useState("bottom");

    // Page position spring
    const [pagePositions, setPagePositions] = useSpring(() => ({
        x: 0,
        y: -window.innerHeight * 1.2,
    }));

    // Show the left screen
    const showLeft = () => {
        if (currVerticalPos.current !== "bottom") return;
        setPagePositions({ x: window.innerWidth * 1.25 });
        currHorizontalPos.current = "left";
        setHorizontalPos("left");
    };

    // Show the middle screen
    const showMiddle = () => {
        if (currVerticalPos.current !== "bottom") return;
        setPagePositions({ x: 0 });
        currHorizontalPos.current = "middle";
        setHorizontalPos("middle");
    };

    // Show the right screen
    const showRight = () => {
        if (currVerticalPos.current !== "bottom") return;
        setPagePositions({ x: -window.innerWidth * 1.25 });
        currHorizontalPos.current = "right";
        setHorizontalPos("right");
    };

    // Show the top screen
    const showTop = () => {
        setPagePositions({ y: 0 });
        currVerticalPos.current = "top";
        setVerticalPos("top");
    };

    // Show the bottom screen
    const showBottom = () => {
        setPagePositions({ y: -window.innerHeight * 1.2 });
        currVerticalPos.current = "bottom";
        setVerticalPos("bottom");
    };

    // #################################################
    //   OPTIONS
    // #################################################

    const [separateByDLC, setSeparateByDLC] = useState(false);
    const [gameFont, setGameFont] = useState(false);

    // #################################################
    //   CURRENT ITEM
    // #################################################

    const [selectedItem, setSelectedItem] = useState("331");
    const [currentItem, setCurrentItem] = useState("331");

    // #################################################
    //   SEARCH
    // #################################################

    const currSearchText = useRef("");
    const [searchText, setSearchText] = useState("");
    const [itemsInSearch, setItemsInSearch] = useState([]);

    return (
        <Data.Provider
            value={{
                // PAGE NAVIGATION
                horizontalPos,
                verticalPos,
                currHorizontalPos,
                currVerticalPos,
                pagePositions,
                showLeft,
                showMiddle,
                showRight,
                showTop,
                showBottom,

                // OPTIONS
                separateByDLC,
                setSeparateByDLC,
                gameFont,
                setGameFont,

                // CURRENT ITEM
                currentItem,
                setCurrentItem,
                selectedItem,
                setSelectedItem,

                // SEARCH
                currSearchText,
                searchText,
                setSearchText,
                itemsInSearch,
                setItemsInSearch,
            }}
        >
            {props.children}
        </Data.Provider>
    );
};

export default DataProvider;
