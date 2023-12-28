import React, {useState} from "react";
import {createStyles, makeStyles} from "@material-ui/core";
import "../animation.css";
import myPicture from "../assets/image/myPicture.png";
import myPicture2 from "../assets/image/myPicture2.jpg";
import {BreakPoints} from "../utils/constants";

const {tablet} = BreakPoints;

const useStyles = makeStyles(theme => createStyles({
    myPicture: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    pictureContainer: {
        [theme.breakpoints.down(tablet)]: {
            width: 250,
            height: 250,
        },
        position: "relative",
        width: 300,
        height: 300,
        marginBottom: 15,
        transition: "all .5s",

        "&:hover": {
            // animation: "swing 2s",
            transform: "rotate(30deg)"
        },
    },
    picture: {
        [theme.breakpoints.down(tablet)]: {
            width: 250,
            height: 250,
        },
        position: "absolute",
        width: 300,
        height: 300,
        borderRadius: "50%",

        transition: "all 1s",
        backfaceVisibility: "hidden",
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
        cursor: "pointer",
        transition: "all .5s",

        "&:hover": {
            transform: "scale(1.2)"
        }
    },
}));

const MyPicture = () => {
    const classes = useStyles();
    const [picIndex, setPicIndex] = useState(0);

    const [pictures, setPictures] = useState([
        {src: myPicture, transform: "rotateY(0deg)"},
        {src: myPicture2, transform: "rotateY(180deg)"}
    ])

    const onSwitch = (index: number) => {
        if (index === picIndex) return;

        setPicIndex(index)

        const newPictures = pictures.slice();

        newPictures[index].transform = "rotateY(0deg)"
        newPictures[picIndex].transform = "rotateY(180deg)"

        setPictures(newPictures);
    }

    return <div className={classes.myPicture}>
        <div className={classes.pictureContainer}>
            {pictures.map((item) => {
                const {src, transform} = item;
                return <img className={classes.picture}
                            style={{transform}}
                            src={src} alt={""}/>
            })}
        </div>

        <div className={classes.switchBar}>
            {pictures.map((item, index) => {
                const activeStyle = index === picIndex ? {
                    background: "#7daed3",
                    border: "none"
                } : {}
                return <div
                    key={item.src}
                    className={classes.switchBtn}
                    style={activeStyle}
                    onClick={() => onSwitch(index)}/>
            })}
        </div>
    </div>
}

export default MyPicture;
