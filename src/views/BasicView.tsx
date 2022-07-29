import React from "react";
import {createStyles, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => createStyles({
    BasicView: {
        height: 600
    },
}));

const BasicView = () => {
    const classes = useStyles();
    return <div id={"Basic"} className={classes.BasicView}>
        BasicView
    </div>
}

export default BasicView;
