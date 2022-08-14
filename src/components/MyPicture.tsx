import React, {useState} from "react";
import {createStyles, makeStyles} from "@material-ui/core";
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
        marginTop: 100,
        marginBottom: 15,
        animation: "swing 2s infinite"
    },
    switchBar: {
        display: "flex"
    },
    switchBtn: {
        width: 10,
        height: 10,
        border: "1px solid #000",
        borderRadius: "50%",
        margin: 5,
        cursor: "pointer"
    },
    switchBtnActive: {
        width: 10,
        height: 10,
        borderRadius: "50%",
        margin: 5,
        cursor: "pointer",
        background: "#7daed3"
    }
}));

const MyPicture = () => {
    const classes = useStyles();
    const myPictures = [myPicture, myPicture2];
    const [picIndex, setPicIndex] = useState(0);

    const onSwitch = (index: number) => {
        setPicIndex(index)
    }

    return <div className={classes.myPicture}>
        <img className={classes.picture} src={myPictures[picIndex]}/>

        <div className={classes.switchBar}>
            {myPictures.map((item, index) => {
                return <div
                    className={index === picIndex ? classes.switchBtnActive : classes.switchBtn}
                    onClick={() => onSwitch(index)}/>
            })}
        </div>
    </div>
}

export default MyPicture;
