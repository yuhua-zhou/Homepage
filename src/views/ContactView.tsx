import React from "react";
import {createStyles, makeStyles} from "@material-ui/core";
import Title from "../components/Title";

const useStyles = makeStyles(theme => createStyles({
    ContactView: {
        height: 600
    },
}));

const ContactView = () => {
    const classes = useStyles();
    return <div id={"Contact"} className={classes.ContactView}>
        <Title title={"Contact"} subTitle={"welcome to contact with me"}/>
    </div>
}

export default ContactView;
