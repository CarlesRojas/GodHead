import React, { useContext, useState, useEffect } from "react";
import Webcam from "react-webcam";
import compareImages from "resemblejs/compareImages";
import classnames from "classnames";

// Components
import Paper from "components/Paper";

// Contexts
import { Data } from "contexts/Data";
import { Utils } from "contexts/Utils";
import { Icons } from "contexts/Icons";

// Icons
import ArrowIcon from "resources/icons/Arrow.svg";
import CameraIcon from "resources/icons/Cam.svg";
import LoadingIcon from "resources/icons/Loading.svg";

export default function Camera() {
    // Contexts
    const { showTop, cameraActive, selectedItem, setSelectedItem, setCurrentItem, showRight } = useContext(Data);
    const { cropImage } = useContext(Utils);
    const { ITEMS, TRINKETS, CARDS } = useContext(Icons);

    // On item clicked
    const onItemClicked = (id) => {
        setSelectedItem(id);
        setCurrentItem(id);
        showRight();
    };

    // #################################################
    //   WEBCAM
    // #################################################

    // Webcam reference
    const cameraRef = React.useRef(null);

    // Image
    const [image, setImage] = useState(null);

    // Capture a screenshot and save it in the register form state
    const capturePhoto = async () => {
        const imageSrc = cameraRef.current.getScreenshot({ width: 400, height: 400 });
        setImage(imageSrc);

        var croppedImg = await cropImage(imageSrc, 90, 90, 220, 220);

        getMoreSimilar(croppedImg);
    };

    // #################################################
    //   MATCH
    // #################################################

    const [similarItems, setSimilarItems] = useState([]);

    // Check all items for the best matched
    const getMoreSimilar = async (croppedImg) => {
        // Promises
        var promises = [];
        var promiseIds = [];

        for (const id of Object.keys(ITEMS)) {
            promises.push(
                compareImages(croppedImg, ITEMS[id], {
                    scaleToSameSize: true,
                    ignore: "antialiasing",
                })
            );
            promiseIds.push(id);
        }

        for (const id of Object.keys(TRINKETS)) {
            promises.push(
                compareImages(croppedImg, TRINKETS[id], {
                    scaleToSameSize: true,
                    ignore: "antialiasing",
                })
            );
            promiseIds.push(id);
        }

        const results = await Promise.all(promises);

        // New array
        var ids = [];
        var match = [];

        for (let i = 0; i < results.length; i++) {
            const data = results[i];
            const id = promiseIds[i];

            // Add to array if it is the first
            if (match.length <= 0) {
                ids.push(id);
                match.push(data.rawMisMatchPercentage);
            }

            // Otherwise
            else {
                var targetPos = -1;

                for (let i = match.length - 1; i >= 0; i--) {
                    const currMatch = match[i];

                    if (data.rawMisMatchPercentage < currMatch) targetPos = i;
                    else break;
                }

                // Add to array
                if (targetPos >= 0) {
                    ids.splice(targetPos, 0, id);
                    match.splice(targetPos, 0, data.rawMisMatchPercentage);

                    // If array has more than 10 items, remove one
                    if (match.length > 20) {
                        ids.pop();
                        match.pop();
                    }
                }
            }
        }

        setSimilarItems(ids);
    };

    // Reset the cam
    const resetCam = () => {
        setImage(null);
        setSimilarItems([]);
    };

    // #################################################
    //   COMPONENT MOUNT
    // #################################################

    // On componente mount
    useEffect(() => {
        // Subscribe to error and disconnext events
        window.PubSub.sub("resetCam", resetCam);

        // Unsubscribe on unmount
        return () => {
            // Unsubscribe to error and disconnext events
            window.PubSub.unsub("resetCam", resetCam);
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // #################################################
    //   RENDER
    // #################################################

    // Placeholder camera
    var webcam = cameraActive ? (
        <Webcam className="webcam" audio={false} videoConstraints={{ facingMode: "environment", aspectRatio: 1 }} mirrored={false} ref={cameraRef} screenshotFormat="image/png" />
    ) : null;

    // Loading Items
    var items =
        similarItems.length > 0 ? (
            <React.Fragment>
                {similarItems.map((id, i) => {
                    if (id.includes("c"))
                        return <img src={CARDS[id]} alt="" className={classnames("itemIcon", { clicked: id === selectedItem })} key={i} onClick={() => onItemClicked(id)} />;
                    else if (id.includes("t"))
                        return <img src={TRINKETS[id]} alt="" className={classnames("itemIcon", { clicked: id === selectedItem })} key={i} onClick={() => onItemClicked(id)} />;
                    else return <img src={ITEMS[id]} alt="" className={classnames("itemIcon", { clicked: id === selectedItem })} key={i} onClick={() => onItemClicked(id)} />;
                })}
            </React.Fragment>
        ) : (
            <img src={LoadingIcon} alt="" className="loadingItems" />
        );

    var content = image ? (
        <div className="content">
            <img src={image} alt="" className="screenshot" />
            <div className="camBorder"></div>
            <div className="possibleItems">{items}</div>
            <div className="retake">
                <div className="retakeButton" onClick={resetCam}>
                    retake
                </div>
            </div>
        </div>
    ) : (
        <div className="content">
            <img src={LoadingIcon} alt="" className="loadingIcon" />
            {webcam}
            <div className="camBorder withFrame"></div>
            <div className="hint">frame the item within the markers</div>
            <div className="filler"></div>
            <div className="camButton">
                <img src={CameraIcon} alt="" className="camIcon" onClick={capturePhoto} />
            </div>
        </div>
    );

    return (
        <div className="camera">
            <div className="paperContainer">
                <Paper>{content}</Paper>
            </div>

            <div className="browse">
                <div className="browseButton" onClick={showTop}>
                    <img src={ArrowIcon} alt="" className="icon" />
                    <p className="text">browse</p>
                </div>
            </div>
        </div>
    );
}
