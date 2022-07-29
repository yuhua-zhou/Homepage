import React from "react";
import {createStyles, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => createStyles({
    EducationView: {
        height: 600
    },
}));

const EducationView = () => {
    const classes = useStyles();
    return <div id={"Education"} className={classes.EducationView}>
        EducationView
    </div>
}

export default EducationView;
