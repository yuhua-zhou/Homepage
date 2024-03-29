import {createStyles, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => createStyles({
    Footer: {
        width: "100%",
        background: "#7daed3",
        padding: "10px 0",
        textAlign: "center",
        color: "white",
        fontSize: 16,
        flexShrink: 0
    }
}));
const Footer = () => {
    const classes = useStyles();

    return <div className={classes.Footer}>
        Copyright©2023. Last updated on Dec. 2023.
    </div>
}

export default Footer;
