import React, {useEffect, useRef, useState} from "react";
import {createStyles, makeStyles} from "@material-ui/core";
import ResizeObserver from 'resize-observer-polyfill';
import {Image} from 'antd';

const useStyles = makeStyles(theme => createStyles({
    AwardItem: {
        display: "flex",
        alignItems: "center",
        fontWeight: 600,
        fontSize: 16,
        margin: 5
    },
    text: {
        margin: "0 10px",
        textDecoration:"underline"
    },
    icon: {
        width: 20,
        height: 20,
    }
}));

interface AwardItemProps {
    image: string
    text: string
    award: string
}

const AwardItem: React.FC<AwardItemProps> = ({image, text, award}) => {
    const classes = useStyles();

    return <div className={classes.AwardItem}>

        <img src={require("../assets/image/" + award + ".png").default}
             className={classes.icon}/>

        <div className={classes.text}>{text}</div>

        <Image height={30}
               src={require("../assets/image/award/" + image).default}/>
    </div>
}

export default AwardItem;

