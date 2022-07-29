import React from "react";
import {createStyles, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => createStyles({
    ContactView: {
        height: 600
    },
}));

const ContactView = () => {
    const classes = useStyles();
    return <div id={"Contact"} className={classes.ContactView}>
        ContactView
    </div>
}

export default ContactView;
