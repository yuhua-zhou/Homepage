import React, {useEffect, useRef, useState} from "react";
import {createStyles, makeStyles} from "@material-ui/core";
import {SwapOutlined} from "@ant-design/icons";
import Paper from "paper";
import "../animation.css";

import myPicture from "../assets/image/myPicture.png";
import myPicture2 from "../assets/image/myPicture2.jpg";

const useStyles = makeStyles(theme => createStyles({
    myPicture: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    picture: {
        width: 300,
        height: 300,
        borderRadius: "50%",
        marginTop: 70,
        marginBottom: 15,
        animation: "swing 2s infinite"
    },
    switchBtn: {
        fontSize: 17,
        color: "#4d85e3",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        cursor: "pointer",
        border: "2px solid #4d85e3",
        padding: "1px 5px",
        fontWeight: 600,
        borderRadius: 7,

        "&:hover": {
            color: "#1852b3",
            border: "2px solid #1852b3",
        }
    }
}));

const MyPicture = () => {
    const classes = useStyles();
    const myPictures = [myPicture, myPicture2];
    const [picIndex, setPicIndex] = useState(0);

    const canvasNode = useRef(null);

    // useEffect(() => {
    //     // @ts-ignore
    //     Paper.setup(canvasNode.current);
    //     const {Raster, Path} = Paper;
    //
    //     let lastPos = Paper.view.center;
    //
    //     const moveHandler = (event: any) => {
    //         lastPos = event.point;
    //
    //         var size = this.bounds.size.clone();
    //         var isLandscape = size.width > size.height;
    //
    //         // If the path is in landscape orientation, we're going to
    //         // split the path horizontally, otherwise vertically:
    //
    //         size /= isLandscape ? [2, 1] : [1, 2];
    //
    //         var path = new Path.Rectangle({
    //             point: this.bounds.topLeft.floor(),
    //             size: size.ceil(),
    //             onMouseMove: moveHandler
    //         });
    //         path.fillColor = raster.getAverageColor(path);
    //
    //         var path = new Path.Rectangle({
    //             point: isLandscape
    //                 ? this.bounds.topCenter.ceil()
    //                 : this.bounds.leftCenter.ceil(),
    //             size: size.floor(),
    //             onMouseMove: moveHandler
    //         });
    //         path.fillColor = raster.getAverageColor(path);
    //
    //         this.remove();
    //     }
    //
    //     const onResize = (event: any) => {
    //         Paper.project.activeLayer.removeChildren();
    //
    //         // Transform the raster so that it fills the bounding rectangle
    //         // of the view:
    //         raster.fitBounds(Paper.view.bounds, true);
    //
    //         // Create a path that fills the view, and fill it with
    //         // the average color of the raster:
    //         new Path.Rectangle({
    //             rectangle: Paper.view.bounds,
    //             fillColor: raster.getAverageColor(Paper.view.bounds),
    //             onMouseMove: moveHandler
    //         });
    //     }
    //
    //     const raster = new Raster("../assets/image/myPicture2.jpg");
    //     raster.on("load", () => {
    //         onResize();
    //     })
    //
    // }, [])

    const onSwitch = () => {
        setPicIndex((picIndex + 1) % myPictures.length)
    }

    return <div className={classes.myPicture}>
        <img className={classes.picture} src={myPictures[picIndex]}/>

        {/*<canvas ref={canvasNode} width={300} height={300}/>*/}

        <div className={classes.switchBtn} onClick={onSwitch}>
            <SwapOutlined/>
            <div>Switch</div>
        </div>
    </div>
}

export default MyPicture;
