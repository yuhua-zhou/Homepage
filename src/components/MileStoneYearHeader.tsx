import React from "react";
import {createStyles, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => createStyles({
    MileStoneYearHeader: {
        display: "flex",
        alignItems: "center",
        fontFamily: "microsoft雅黑",
        fontSize: 16,
        paddingLeft: 20
    },
    symbol: {
        display: "flex",
        flexDirection: 'column',
        alignItems: "center"
    },
    diamond: {
        width: 15,
        height: 15,
        background: "#c2d6e6",
        transform: "rotate(45deg)",
        margin: "2px 0"
    },
    line: {
        width: 2,
        height: 10,
        background: "#f0f0f0"
    },
    arrow: {
        width: 104,
        height: 2,
        background: "#f0f0f0"
    },
    year: {
        background: "#c2d6e6",
        color: "white",
        padding: "2px 10px"
    }
}));

interface MileStoneYearHeaderProps {
    year: string
}

const MileStoneYearHeader: React.FC<MileStoneYearHeaderProps> = ({year}) => {
    const classes = useStyles();
    return <div className={classes.MileStoneYearHeader}>
        <div className={classes.arrow}/>
        <div className={classes.symbol}>
            <div className={classes.line}/>
            <div className={classes.diamond}/>
            <div className={classes.line}/>
        </div>
        <div className={classes.arrow}/>
        <div className={classes.year}>
            {year}
        </div>
    </div>
}

export default MileStoneYearHeader;
