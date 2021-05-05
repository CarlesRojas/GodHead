import React, { useEffect, useContext } from "react";
import { animated } from "react-spring";
import { useDrag } from "react-use-gesture";

// Contexts
import { Utils } from "contexts/Utils";
import { Data } from "contexts/Data";

// Components
import Items from "components/Items";
import Camera from "components/Camera";
import Options from "components/Options";
import Item from "components/Item";

export default function App() {
    // Contexts
    const { getCookie, setCookie } = useContext(Utils);
    const { setSeparateByDLC, setGameFont, currHorizontalPos, currVerticalPos, pagePositions, setPagePositions, showLeft, showMiddle, showRight, showTop, showBottom } = useContext(Data);

    // #################################################
    //   BACK GESTURE
    // #################################################

    // Horizontal gesture
    const gestureBind = useDrag(
        ({ event, cancel, canceled, down, vxvy: [vx], movement: [mx] }) => {
            // Stop event propagation
            event.stopPropagation();

            // Return if canceled
            if (canceled) return;

            // Cancel gesture
            if (currHorizontalPos.current === "middle") {
                cancel();
                return;
            }

            // Snap to the welcome screen or stay on te current page
            if (!down) {
                if (currHorizontalPos.current === "right" && (mx > 100 || vx > 1)) showMiddle();
                else if (currHorizontalPos.current === "left" && (mx < -100 || vx < -1)) showMiddle();
                else if (currHorizontalPos.current === "right") showRight();
                else showLeft();
            }

            // Update the position while the gesture is active
            else {
                var displ = currHorizontalPos.current === "right" ? Math.max(mx, -10) : Math.min(mx, 10);
                setPagePositions({ x: (currHorizontalPos.current === "right" ? -window.innerWidth : window.innerWidth) * 1.25 + displ });
            }
        },
        { filterTaps: true, axis: "x" }
    );

    // #################################################
    //   GET OPTIONS
    // #################################################

    // Get options
    const getOptions = () => {
        const separateByDLCCookie = getCookie("godhead_separateByDLC");

        // If the option exists, save in data & renew cookie
        if (separateByDLCCookie) {
            setSeparateByDLC(separateByDLCCookie === "true");
            setCookie("godhead_separateByDLC", separateByDLCCookie, 365);
        }
        // Otherwise create cookie -> false
        else {
            setSeparateByDLC(false);
            setCookie("godhead_separateByDLC", "false", 365);
        }

        const gameFontCookie = getCookie("godhead_gameFont");

        // If the option exists, save in data & renew cookie
        if (gameFontCookie) {
            setGameFont(gameFontCookie === "true");
            setCookie("godhead_gameFont", gameFontCookie, 365);
        }
        // Otherwise create cookie -> false
        else {
            setGameFont(false);
            setCookie("godhead_gameFont", "true", 365);
        }
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

        // Get Options
        getOptions();

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
        <div className="app" onKeyDown={onKeyPressed} {...gestureBind()}>
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
