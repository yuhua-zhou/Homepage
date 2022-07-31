import React from "react";
import {createStyles, makeStyles} from "@material-ui/core";
import Title from "../components/Title";

const useStyles = makeStyles(theme => createStyles({
    EducationView: {
        height: 600
    },
}));

const EducationView = () => {
    const classes = useStyles();
    return <div id={"Education"} className={classes.EducationView}>
        <Title title={"Education"} subTitle={"where i grow up"}/>
    </div>
}

export default EducationView;
