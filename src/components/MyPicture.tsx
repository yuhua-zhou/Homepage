import React, {useState} from "react";
import {createStyles, makeStyles} from "@material-ui/core";
import "../animation.css";
import myPicture from "../assets/image/myPicture.png";
import myPicture2 from "../assets/image/myPicture2.jpg";
import {BreakPoints} from "../utils/constants";

const {laptop, tablet} = BreakPoints;

const useStyles = makeStyles(theme => createStyles({
    myPicture: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    picture: {
        [theme.breakpoints.down(tablet)]: {
            width: 250,
            height: 250,
        },
        width: 300,
        height: 300,
        borderRadius: "50%",
        marginBottom: 15,
        "&:hover": {
            animation: "swing 2s"
        },
        [theme.breakpoints.up(laptop)]: {
            marginTop: 100,
        },
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
        <img className={classes.picture} src={myPictures[picIndex]} alt={""}/>

        <div className={classes.switchBar}>
            {myPictures.map((item, index) => {
                return <div
                    key={item}
                    className={index === picIndex ? classes.switchBtnActive : classes.switchBtn}
                    onClick={() => onSwitch(index)}/>
            })}
        </div>
    </div>
}

export default MyPicture;
