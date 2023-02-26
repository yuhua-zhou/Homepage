import React from "react";
import {createStyles, makeStyles} from "@material-ui/core";
import {BreakPoints} from "../utils/constants";

const {tablet} = BreakPoints;

const useStyles = makeStyles(theme => createStyles({
    EducationItem: {
        fontFamily: "Microsoft雅黑",
        flex: 1,
        "&:hover > $desktop > $detailBox": {
            border: "3px solid #7daed3",
            transition: "0.8s",
        },
        "&:hover > $desktop > $divider > $diamond": {
            backgroundColor: "#6cafd6",
            transition: "0.8s",
        },
    },
    desktop: {
        [theme.breakpoints.down(tablet)]: {
            display: "none"
        },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    mobile: {
        [theme.breakpoints.up(tablet)]: {
            display: "none"
        },
        display: "flex",
        justifyContent: "center",
    },
    dateTime: {
        [theme.breakpoints.down(tablet)]: {
            marginBottom: 10,
        },
        color: "white",
        backgroundColor: "#da6167",
        fontSize: 17,
        padding: "2px 5px",
        textAlign: "center"
    },
    divider: {
        [theme.breakpoints.down(tablet)]: {
            flexDirection: "column",
            margin: 0,
            width: "auto"
        },
        width: "100%",
        display: "flex",
        alignItems: "center",
        margin: "15px 0"
    },
    line: {
        [theme.breakpoints.down(tablet)]: {
            height: 100,
            width: 3
        },
        flex: 1,
        height: 3,
        backgroundColor: "#7daed3"
    },
    diamond: {
        [theme.breakpoints.down(tablet)]: {
            margin: 10,
        },
        width: 17,
        height: 17,
        margin: "0 10px",
        backgroundColor: "#222",
        transform: "rotate(45deg)",
        transition: "0.5s",
    },
    detailBox: {
        [theme.breakpoints.down(tablet)]: {
            width: 300,
            alignItems: "center"
        },
        display: "flex",
        border: "3px solid #c2d6e6",
        padding: 10,
        width: 370,
        transition: "0.8s",
    },
    schoolLogo: {
        [theme.breakpoints.down(tablet)]: {
            width: 80,
            height: 80,
        },
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
        [theme.breakpoints.down(tablet)]: {
            display: "none"
        },
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
        {/*desktop version*/}
        <div className={classes.desktop}>
            <div className={classes.dateTime}>{dateTime}</div>

            {/*horizontal divider*/}
            <div className={classes.divider}>
                <div className={classes.line}/>
                <div className={classes.diamond}/>
                <div className={classes.line}/>
            </div>

            <div className={classes.detailBox}>
                <img src={logo} className={classes.schoolLogo} alt={""}/>
                <div style={{marginLeft: 10}}>
                    <div className={classes.schoolName}>{schoolName}</div>
                    <div className={classes.description}>{description}</div>
                </div>
            </div>
        </div>

        {/*mobile version*/}
        <div className={classes.mobile}>

            {/*vertical divider*/}
            <div className={classes.divider}>
                <div className={classes.line}/>
                <div className={classes.diamond}/>
                <div className={classes.line}/>
            </div>
            <div style={{display: "flex", flexDirection: "column", padding: "10px 0"}}>
                <div className={classes.dateTime}>{dateTime}</div>
                <div className={classes.detailBox}>
                    <img src={logo} className={classes.schoolLogo} alt={""}/>
                    <div style={{marginLeft: 10}}>
                        <div className={classes.schoolName}>{schoolName}</div>
                        <div className={classes.description}>{description}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default EducationItem;
