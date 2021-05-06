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
    const [, setCurrHorizontalPos] = useState("middle");

    // Current vertical position: "top" "bottom"
    const currVerticalPos = useRef("top");
    const [, setCurrVerticalPos] = useState("top");

    // Page position spring
    const [pagePositions, setPagePositions] = useSpring(() => ({
        x: 0,
        y: 0,
    }));

    // Show the left screen
    const showLeft = () => {
        setPagePositions({ x: window.innerWidth * 1.25 });
        currHorizontalPos.current = "left";
        setCurrHorizontalPos("left");
        setCameraActive(false);
    };

    // Show the middle screen
    const showMiddle = () => {
        setPagePositions({ x: 0 });
        currHorizontalPos.current = "middle";
        setCurrHorizontalPos("middle");

        // If in the bottom, show camera
        if ((currVerticalPos.current = "bottom")) setCameraActive(true);
        else setCameraActive(false);
    };

    // Show the right screen
    const showRight = () => {
        setPagePositions({ x: -window.innerWidth * 1.25 });
        currHorizontalPos.current = "right";
        setCurrHorizontalPos("right");
        setCameraActive(false);
    };

    // Show the top screen
    const showTop = () => {
        if (currHorizontalPos.current !== "middle") return;

        setPagePositions({ y: 0 });
        currVerticalPos.current = "top";
        setCurrVerticalPos("top");
        setCameraActive(false);
        window.PubSub.emit("resetCam");
    };

    // Show the bottom screen
    const showBottom = () => {
        if (currHorizontalPos.current !== "middle") return;

        setPagePositions({ y: -window.innerHeight * 1.2 });
        currVerticalPos.current = "bottom";
        setCurrVerticalPos("bottom");
        setCameraActive(true);
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
    //   CAMERA
    // #################################################

    const [cameraActive, setCameraActive] = useState(false);

    return (
        <Data.Provider
            value={{
                // PAGE NAVIGATION
                currHorizontalPos,
                currVerticalPos,
                pagePositions,
                setPagePositions,
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

                // CAMERA
                cameraActive,
                setCameraActive,
            }}
        >
            {props.children}
        </Data.Provider>
    );
};

export default DataProvider;
