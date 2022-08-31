import React from "react";
import {createStyles, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => createStyles({
    EducationItem: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "Microsoft雅黑",
        flex: 1,
        margin: "20px 0",

        "&:hover > $detailBox": {
            border: "3px solid #7daed3",
            transition: "0.8s",
        },
        "&:hover > $divider > $diamond": {
            backgroundColor: "#6cafd6",
            transition: "0.8s",
        },
    },
    dateTime: {
        color: "white",
        backgroundColor: "#da6167",
        fontSize: 17,
        padding: "2px 5px"
    },
    divider: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        margin: "15px 0"
    },
    line: {
        flex: 1,
        height: 3,
        backgroundColor: "#7daed3"
    },
    diamond: {
        width: 17,
        height: 17,
        margin: "0 10px",
        backgroundColor: "#222",
        transform: "rotate(45deg)",
        transition: "0.5s",
    },
    detailBox: {
        display: "flex",
        border: "3px solid #c2d6e6",
        padding: 10,
        width: 370,
        transition: "0.8s",
    },
    schoolLogo: {
        width: 100,
        height: 100,
        marginRight: 10,
        borderRadius: "50%"
    },
    schoolName: {
        color: "#000",
        fontWeight: 600,
        fontSize: 15
    },
    description: {
        marginTop: 5,
        fontSize: 12,
    }
}));

interface EducationItemProps {
    dateTime: string,
    schoolName: string,
    schoolLogo: string,
    description: string
}

const EducationItem: React.FC<EducationItemProps> = ({dateTime, schoolLogo, schoolName, description}) => {
    const classes = useStyles();
    const logo = require("../assets/image/" + schoolLogo + ".png").default;

    return <div className={classes.EducationItem}>
        <div className={classes.dateTime}>{dateTime}</div>
        <div className={classes.divider}>
            <div className={classes.line}/>
            <div className={classes.diamond}/>
            <div className={classes.line}/>
        </div>

        <div className={classes.detailBox}>
            <img src={logo} className={classes.schoolLogo}/>
            <div style={{marginLeft: 10}}>
                <div className={classes.schoolName}>{schoolName}</div>
                <div className={classes.description}>{description}</div>
            </div>
        </div>
    </div>
}

export default EducationItem;
