import {Component} from "react";
import {createStyles, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => createStyles({
    Footer: {
        width: "100%",
        background: "#7daed3",
        padding: "2px 0",
        textAlign: "center",
        color: "white",
        fontSize: 16,
        fontWeight: 500,
        flexShrink: 0
    }
}));
const Footer = () => {
    const classes = useStyles();

    return <div className={classes.Footer}>
        Copyright©2022. Last updated on Nov. 2022.
    </div>
}

export default Footer;
