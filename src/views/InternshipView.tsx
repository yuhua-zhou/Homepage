import Title from "../components/Title";
import React from "react";
import {createStyles, makeStyles} from "@material-ui/core";
import InternshipItem from "../components/InternshipItem";

const useStyles = makeStyles(theme => createStyles({
    InternshipView: {},
}));

const InternshipView = () => {
    const classes = useStyles();
    return <div id={"Internship"} className={classes.InternshipView}>
        <Title title={"Internship"} subTitle={"my work experience"}/>
        <div>
            {[1].map(() => {
                return <InternshipItem/>
            })}
        </div>
    </div>
}

export default InternshipView;
