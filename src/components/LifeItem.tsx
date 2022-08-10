import React from "react";
import {createStyles, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => createStyles({
    lifeItem: {
        margin: 10,
        padding: 10,
        background: "white",
        display: "inline-block",
        width: 272,
        height: 250,
        borderRadius: 3,

        "&:hover > $imgContainer > $lifeImg": {
            transform: "scale(1.2)",
            transition: "0.8s",
        }
    },
    imgContainer: {
        width: "100%",
        height: 170,
        overflow: "hidden",
    },
    lifeImg: {
        width: "100%",
        height: "100%",
        transition: "0.8s",
    },
    lifeText: {
        marginTop: 10
    },
}));

interface LifeItemProps {
    snapshot: string
    text: string
}

const LifeItem: React.FC<LifeItemProps> = ({snapshot, text}) => {
    const classes = useStyles();
    return <div className={classes.lifeItem}>
        <div className={classes.imgContainer}>
            <img className={classes.lifeImg} src={require("../assets/image/" + snapshot + ".jpg").default}/>
        </div>
        <div className={classes.lifeText}>{text}</div>
    </div>
}

export default LifeItem;
