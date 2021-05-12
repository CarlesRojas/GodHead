import React, { useEffect, useContext } from "react";
import { animated } from "react-spring";
import { isMobile } from "react-device-detect";

// Contexts
import { Utils } from "contexts/Utils";
import { Data } from "contexts/Data";

// Components
import Items from "components/Items";
import Options from "components/Options";
import Item from "components/Item";
import Search from "components/Search";
import Navbar from "components/Navbar";

export default function App() {
    // Contexts
    const { getCookie, setCookie } = useContext(Utils);
    const { setSeparateByDLC, setGameFont, pagePositions } = useContext(Data);

    // #################################################
    //   GET OPTIONS
    // #################################################

    // Get options
    const getOptions = () => {
        // #################################################
        //   SEPARATE BY DLC
        // #################################################

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

        // #################################################
        //   GAME FONT
        // #################################################

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

    // On componente mount
    useEffect(() => {
        // Get Options
        getOptions();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // #################################################
    //   RENDER
    // #################################################

    // Navbar
    if (isMobile) var navbar = <Navbar></Navbar>;
    else navbar = null;

    if (isMobile)
        var content = (
            <div className="app">
                <animated.div className="verticalGrid" style={{ y: pagePositions.y }}>
                    <div className="cell">
                        <Item></Item>
                    </div>

                    <div className="cell"></div>
                </animated.div>

                <animated.div className="horizontalGrid" style={{ x: pagePositions.x, y: pagePositions.y }}>
                    <div className="cell">
                        <Options></Options>
                    </div>

                    <div className="cell">
                        <Items useSearch={false} startEmpty={false}></Items>
                    </div>

                    <div className="cell">
                        <Search></Search>
                    </div>
                </animated.div>

                <animated.div className="navbarContainer" style={{ y: pagePositions.y }}>
                    {navbar}
                </animated.div>
            </div>
        );
    else
        content = (
            <div className="app">
                <div className="desktopGrid">
                    <div className="itemsCell">
                        <Items></Items>
                    </div>
                    <div className="itemCell">
                        <Item></Item>
                    </div>
                    <div className="optionsCell">
                        <Options></Options>
                    </div>
                </div>
            </div>
        );

    return <React.Fragment>{content}</React.Fragment>;
}
