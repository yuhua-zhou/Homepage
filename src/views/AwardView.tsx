import React from "react";
import {createStyles, makeStyles} from "@material-ui/core";
import Title from "../components/Title";

const useStyles = makeStyles(theme => createStyles({
    AwardView: {
        height: 600
    },
}));

const AwardView = () => {
    const classes = useStyles();
    return <div id={"Awards"} className={classes.AwardView}>
        <Title title={"Award"} subTitle={"what i gained from competition"}/>
    </div>
}

export default AwardView;
