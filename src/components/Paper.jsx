import React from "react";

// Images
import Stain1 from "resources/background/page/page_Stain1.svg";
import BottomLeft from "resources/background/page/page_BottomLeft.svg";
import BottomLeftPaper from "resources/background/page/page_BottomLeftPaper.svg";
import BottomRight from "resources/background/page/page_BottomRight.svg";
import BottomRightPaper from "resources/background/page/page_BottomRightPaper.svg";
import TopLeft from "resources/background/page/page_TopLeft.svg";
import TopLeftPaper from "resources/background/page/page_TopLeftPaper.svg";
import TopRight from "resources/background/page/page_TopRight.svg";
import TopRightPaper from "resources/background/page/page_TopRightPaper.svg";
import Left from "resources/background/page/page_Left.svg";
import LeftPaper from "resources/background/page/page_LeftPaper.svg";
import Right from "resources/background/page/page_Right.svg";
import RightPaper from "resources/background/page/page_RightPaper.svg";

export default function Paper({ children }) {
    // #################################################
    //   RENDER
    // #################################################

    return (
        <div className="paper">
            <div className="stains">
                <img src={Stain1} alt="" className="stain" />
            </div>
            <div className="borders">
                <img src={TopLeft} alt="" className="border" />
                <img src={TopRight} alt="" className="border" />
                <img src={Left} alt="" className="border" />
                <img src={Right} alt="" className="border" />
                <img src={BottomLeft} alt="" className="border" />
                <img src={BottomRight} alt="" className="border" />
            </div>
            <div className="papers">
                <img src={TopLeftPaper} alt="" className="page" />
                <img src={TopRightPaper} alt="" className="page" />
                <img src={LeftPaper} alt="" className="page" />
                <img src={RightPaper} alt="" className="page" />
                <img src={BottomLeftPaper} alt="" className="page" />
                <img src={BottomRightPaper} alt="" className="page" />
            </div>
            <div className="children">{children}</div>
        </div>
    );
}
