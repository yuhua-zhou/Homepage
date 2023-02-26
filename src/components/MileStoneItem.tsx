import React from "react";
import {createStyles, makeStyles} from "@material-ui/core";
import {BreakPoints} from "../utils/constants";

const {tablet} = BreakPoints;

const useStyles = makeStyles(theme => createStyles({
    MileStoneItem: {
        [theme.breakpoints.down(tablet)]: {
            paddingLeft: 0
        },
        display: "flex",
        alignItems: "center",
        fontFamily: "microsoft雅黑",
        fontSize: 15,
        paddingLeft: 20
    },
    symbol: {
        [theme.breakpoints.down(tablet)]: {
            margin: "0 10px"
        },
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        margin: "0 20px"
    },
    line: {
        width: 2,
        height: 7,
        background: "#f0f0f0",
    },
    circle: {
        width: 13,
        height: 13,
        borderRadius: "50%",
        border: "2.5px solid #c2d6e6",
        margin: "2px 0",
    },
    date: {
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
