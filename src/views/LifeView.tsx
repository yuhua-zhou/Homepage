import React from "react";
import {createStyles, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => createStyles({
    LifeView: {
        height: 600
    },
}));

const LifeView = () => {
    const classes = useStyles();
    return <div id={"Life"} className={classes.LifeView}>
        LifeView
    </div>
}

export default LifeView;
