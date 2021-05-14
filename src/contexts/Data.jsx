import React, { createContext, useState, useRef, useEffect } from "react";
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
    const showLeft = (noAnimation) => {
        if (currVerticalPos.current !== "bottom") return;

        if (noAnimation) pagePositions.x.set(window.innerWidth * 1.25);
        else setPagePositions({ x: window.innerWidth * 1.25 });

        window.PubSub.emit("onClearSearch");

        currHorizontalPos.current = "left";
        setHorizontalPos("left");
    };

    // Show the middle screen
    const showMiddle = (noAnimation) => {
        if (currVerticalPos.current !== "bottom") return;

        if (noAnimation) pagePositions.x.set(0);
        else setPagePositions({ x: 0 });

        window.PubSub.emit("onClearSearch");

        currHorizontalPos.current = "middle";
        setHorizontalPos("middle");
    };

    // Show the right screen
    const showRight = (noAnimation) => {
        if (currVerticalPos.current !== "bottom") return;

        if (noAnimation) pagePositions.x.set(-window.innerWidth * 1.25);
        else setPagePositions({ x: -window.innerWidth * 1.25 });

        window.PubSub.emit("onFocusSearch");

        currHorizontalPos.current = "right";
        setHorizontalPos("right");
    };

    // Show the top screen
    const showTop = (noAnimation) => {
        if (noAnimation) pagePositions.y.set(0);
        else setPagePositions({ y: 0 });

        currVerticalPos.current = "top";
        setVerticalPos("top");
    };

    // Show the bottom screen
    const showBottom = (noAnimation) => {
        if (noAnimation) pagePositions.y.set(-window.innerHeight * 1.2);
        else setPagePositions({ y: -window.innerHeight * 1.2 });

        currVerticalPos.current = "bottom";
        setVerticalPos("bottom");
    };

    // Resize actions
    const onResize = () => {
        if (currHorizontalPos.current === "left") showLeft(true);
        else if (currHorizontalPos.current === "middle") showMiddle(true);
        else if (currHorizontalPos.current === "right") showRight(true);

        if (currVerticalPos.current === "top") showTop(true);
        else if (currVerticalPos.current === "bottom") showBottom(true);
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
    const [itemsInSearch, setItemsInSearch] = useState([]);

    // #################################################
    //   COMPONENT MOUNT
    // #################################################

    // On componente mount
    useEffect(() => {
        // Subscribe to events
        window.addEventListener("resize", onResize);

        return () => {
            // Unsubscribe from events
            window.removeEventListener("resize", onResize);
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // #################################################
    //   PROVIDE DATA
    // #################################################

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
                itemsInSearch,
                setItemsInSearch,
            }}
        >
            {props.children}
        </Data.Provider>
    );
};

export default DataProvider;
