import React, {useEffect, useRef, useState} from "react";
import {createStyles, makeStyles} from "@material-ui/core";
import ResizeObserver from 'resize-observer-polyfill';

const useStyles = makeStyles(theme => createStyles({
    AwardItem: {
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        margin: 5
    },
    image: {
        height: 180,
    },
    text: {
        padding: "10px 5px",
        display: "flex",
        alignItems: "center",
        fontWeight: 600
    },
    icon: {
        width: 18,
        height: 18,
        marginRight: 5
    }
}));

interface AwardItemProps {
    image: string
    text: string
    award: string
}

const AwardItem: React.FC<AwardItemProps> = ({image, text, award}) => {
    const classes = useStyles();
    const [textWidth, setTextWidth] = useState(0);
    const currentNode = useRef(null);

    useEffect(() => {
        const resizeObserver = new ResizeObserver((entries, observer) => {
            for (const entry of entries) {
                const {left, top, width, height} = entry.contentRect;
                setTextWidth(width);
            }
        });
        // @ts-ignore
        resizeObserver.observe(currentNode.current);
    }, [])

    return <div className={classes.AwardItem}>
        <img src={require("../assets/image/award/" + image).default}
             ref={currentNode}
             className={classes.image}/>
        <div className={classes.text} style={{width: textWidth}}>
            <img src={require("../assets/image/" + award + ".png").default}
                 className={classes.icon}/>
            <div>{text}</div>
        </div>
    </div>
}

export default AwardItem;

