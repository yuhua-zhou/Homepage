import React from "react";
import {createStyles, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => createStyles({
    AwardView: {
        height: 600
    },
}));

const AwardView = () => {
    const classes = useStyles();
    return <div id={"Award"} className={classes.AwardView}>
        AwardView
    </div>
}

export default AwardView;
