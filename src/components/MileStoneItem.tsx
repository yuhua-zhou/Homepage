import React from "react";
import {createStyles, makeStyles} from "@material-ui/core";
import {BreakPoints} from "../utils/constants";
import IconSet from "./IconSet";

const {tablet} = BreakPoints;

const useStyles = makeStyles(theme => createStyles({
    MileStoneItem: {
        [theme.breakpoints.down(tablet)]: {
            paddingLeft: 0
        },
        display: "flex",
        alignContent: "center",
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
        margin: "0 20px",
    },
    line: {
        width: 2,
        flex: 1,
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
        [theme.breakpoints.down(tablet)]: {
            width: 60,
        },
        width: 100,
        textAlign: "center",
        flexShrink: 0,
        alignSelf: "center"
    },
    issue: {
        marginRight: 10,
        padding: "5px 0"
    }
}));

interface MileStoneItemProps {
    date: string,
    issue: string,
    icon: string
}

const MileStoneItem: React.FC<MileStoneItemProps> = ({date, issue, icon}) => {
    const classes = useStyles();
    return <div className={classes.MileStoneItem}>
        <div className={classes.date}>{date}</div>
        <div className={classes.symbol}>
            <div className={classes.line}/>
            <div className={classes.circle}/>
            <div className={classes.line}/>
        </div>
        <div className={classes.issue}>{issue}</div>
        <IconSet name={icon}/>
    </div>
}

export default MileStoneItem;
