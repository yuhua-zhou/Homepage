import React from "react";
import {createStyles, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => createStyles({
    PublicationView: {
        height: 600
    },
}));

const PublicationView = () => {
    const classes = useStyles();
    return <div id={"Publication"} className={classes.PublicationView}>
        PublicationView
    </div>
}

export default PublicationView;
