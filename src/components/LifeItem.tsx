import React, {useEffect, useMemo, useRef} from "react";
import {createStyles, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => createStyles({
    lifeItem: {
        margin: 10,
        padding: 10,
        background: "white",
        display: "inline-flex",
        flexDirection: "column",
        width: 272,
        height: 260,
        borderRadius: 3,

        "&:hover > $imgContainer > $lifeImg": {
            transform: "scale(1.2)",
            transition: "0.8s",
        }
    },
    imgContainer: {
        width: "100%",
        height: 180,
        overflow: "hidden",
        textAlign: "center"
    },
    lifeImg: {
        maxWidth: "100%",
        height: "100%",
        transition: "0.8s",
    },
    lifeText: {
        marginTop: 5,
        textAlign: "center",
        flex: 1
    },
    dashLine: {
        height: 1,
        backgroundImage: "linear-gradient(to right, #c7c7c7 35%, rgba(255,255,255,0) 0%)",
        backgroundPosition: "bottom",
        backgroundSize: "10px 1px",
        backgroundRepeat: "repeat-x"
    },
    date: {
        color: "#c7c7c7",
        fontStyle: "italic",
        fontSize: "0.7em",
        textAlign: "right"
    }
}));

interface LifeItemProps {
    snapshot: string
    text: string,
    date: string
}

const LifeItem: React.FC<LifeItemProps> = ({snapshot, text, date}) => {
    const classes = useStyles();
    const imgRef = useRef(null);

    const imgSrc = useMemo(() => {
        return require("../assets/image/life/" + snapshot);
    }, [snapshot]);

    return <div className={classes.lifeItem}>
        <div className={classes.imgContainer}>
            <img className={classes.lifeImg}
                 ref={imgRef}
                 alt={""}
                 src={imgSrc}/>
        </div>
        <div className={classes.lifeText}>{text}</div>
        {/*<div>*/}
        {/*    <div className={classes.dashLine}/>*/}
        {/*</div>*/}
        <div className={classes.date}>{date}</div>
    </div>

}

export default LifeItem;
