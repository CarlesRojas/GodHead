import React, { useEffect, useState, useRef } from "react";
import { useSpring, animated } from "react-spring";

// Components
import Items from "components/Items";
import Camera from "components/Camera";
import Options from "components/Options";
import Item from "components/Item";

export default function App() {
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
    const [pagePositions, setPositions] = useSpring(() => ({
        x: 0,
        y: 0,
    }));

    // Show the left screen
    const showLeft = () => {
        setPositions({ x: window.innerWidth });
        currHorizontalPos.current = "left";
        setCurrHorizontalPos("left");
    };

    // Show the middle screen
    const showMiddle = () => {
        setPositions({ x: 0 });
        currHorizontalPos.current = "middle";
        setCurrHorizontalPos("middle");
    };

    // Show the right screen
    const showRight = () => {
        setPositions({ x: -window.innerWidth });
        currHorizontalPos.current = "right";
        setCurrHorizontalPos("right");
    };

    // Show the top screen
    const showTop = () => {
        if (currHorizontalPos.current !== "middle") return;

        setPositions({ y: 0 });
        currVerticalPos.current = "top";
        setCurrVerticalPos("top");
    };

    // Show the bottom screen
    const showBottom = () => {
        if (currHorizontalPos.current !== "middle") return;

        setPositions({ y: -window.innerHeight });
        currVerticalPos.current = "bottom";
        setCurrVerticalPos("bottom");
    };

    // #################################################
    //   COMPONENT MOUNT
    // #################################################

    const onKeyPressed = (e) => {
        if (e.key === "w" && currVerticalPos.current === "bottom") showTop();
        else if (e.key === "s" && currVerticalPos.current === "top") showBottom();
        else if (e.key === "a" && currHorizontalPos.current === "right") showMiddle();
        else if (e.key === "a" && currHorizontalPos.current === "middle") showLeft();
        else if (e.key === "d" && currHorizontalPos.current === "left") showMiddle();
        else if (e.key === "d" && currHorizontalPos.current === "middle") showRight();
    };

    // On componente mount
    useEffect(() => {
        // Subscribe to events
        window.addEventListener("keydown", onKeyPressed, true);

        // Unsubscribe from events and stop loop
        return () => {
            window.removeEventListener("keydown", onKeyPressed, true);
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // #################################################
    //   RENDER
    // #################################################

    return (
        <div className="app" onKeyDown={onKeyPressed}>
            <animated.div className="horizontalGrid" style={{ x: pagePositions.x }}>
                <div className="left">
                    <Options></Options>
                </div>

                <div className="middle"></div>

                <div className="right">
                    <Item></Item>
                </div>
            </animated.div>

            <animated.div className="verticalGrid" style={{ x: pagePositions.x, y: pagePositions.y }}>
                <div className="top">
                    <Items></Items>
                </div>

                <div className="bottom">
                    <Camera></Camera>
                </div>
            </animated.div>
        </div>
    );
}
