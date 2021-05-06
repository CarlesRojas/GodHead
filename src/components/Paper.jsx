import React from "react";
import classnames from "classnames";
import { isMobile } from "react-device-detect";

// Images
import TopLeft from "resources/background/TopLeft.svg";
import TopRight from "resources/background/TopRight.svg";
import BottomLeft from "resources/background/BottomLeft.svg";
import BottomRight from "resources/background/BottomRight.svg";

export default function Paper({ children }) {
    // #################################################
    //   RENDER
    // #################################################

    return (
        <div className="paper">
            <div className="grid">
                <img src={TopLeft} alt="" className="corner" />
                <div className="top"></div>
                <img src={TopRight} alt="" className="corner" />
                <div className="left"></div>
                <div className="middle"></div>
                <div className="right"></div>
                <img src={BottomLeft} alt="" className="corner" />
                <div className="bottom"></div>
                <img src={BottomRight} alt="" className="corner" />
            </div>

            <div className={classnames("children", { desktop: !isMobile })}>{children}</div>
        </div>
    );
}
