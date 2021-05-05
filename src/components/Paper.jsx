import React from "react";

// Images
import TopLeft from "resources/background/TopLeft.svg";
import TopRight from "resources/background/TopRight.svg";
import BottomLeft from "resources/background/BottomLeft.svg";
import BottomRight from "resources/background/BottomRight.svg";
//import Background from "resources/background/Background.svg";
//import BottomLeftPaper from "resources/background/page_BottomLeftPaper.svg";
//import BottomRightPaper from "resources/background/page_BottomRightPaper.svg";
//import TopLeftPaper from "resources/background/page_TopLeftPaper.svg";
//import TopRightPaper from "resources/background/page_TopRightPaper.svg";
//import Left from "resources/background/page_Left.svg";
//import LeftPaper from "resources/background/page_LeftPaper.svg";
//import Right from "resources/background/page_Right.svg";
//import RightPaper from "resources/background/page_RightPaper.svg";

export default function Paper({ children }) {
    // #################################################
    //   RENDER
    // #################################################

    return (
        <div className="paper">
            {/*
            <div className="grid">
                <div className="topLeft"></div>
                <div className="top"></div>
                <div className="topRight"></div>
                <div className="left"></div>
                <div className="middle"></div>
                <div className="right"></div>
                <div className="bottomLeft"></div>
                <div className="bottom"></div>
                <div className="bottomRight"></div>
            </div>
            */}
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
            <div className="children">{children}</div>
        </div>
    );
}
