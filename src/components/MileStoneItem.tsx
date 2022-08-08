import React from "react";
import {createStyles, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => createStyles({
    MileStoneItem: {
        display: "flex",
        alignItems: "center",
        fontFamily: "microsoft雅黑",
        fontSize: 15,
        paddingLeft: 20
    },
    symbol: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginRight: 20
    },
    line: {
        width: 2,
        height: 10,
        background: "#f0f0f0"
    },
    circle: {
        width: 13,
        height: 13,
        borderRadius: "50%",
        border: "2.5px solid #c2d6e6",
        margin: "2px 0",
    },
    date: {
        marginRight: 20,
        width: 85,
        textAlign: "center"
    },
    issue: {}
}));

interface MileStoneItemProps {
    date: string,
    issue: string
}

const MileStoneItem: React.FC<MileStoneItemProps> = ({date, issue}) => {
    const classes = useStyles();
    return <div className={classes.MileStoneItem}>
        <div className={classes.date}>{date}</div>
        <div className={classes.symbol}>
            <div className={classes.line}/>
            <div className={classes.circle}/>
            <div className={classes.line}/>
        </div>
        <div className={classes.issue}>{issue}</div>
    </div>
}

export default MileStoneItem;
