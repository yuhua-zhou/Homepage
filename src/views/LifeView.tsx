import React from "react";
import {createStyles, makeStyles} from "@material-ui/core";
import Title from "../components/Title";

const useStyles = makeStyles(theme => createStyles({
    LifeView: {
        height: 600
    },
}));

const LifeView = () => {
    const classes = useStyles();
    return <div id={"Life"} className={classes.LifeView}>
        <Title title={"Life"} subTitle={"what my spare time"}/>

    </div>
}

export default LifeView;
