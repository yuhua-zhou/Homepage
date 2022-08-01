import React from "react";
import {createStyles, makeStyles} from "@material-ui/core";
import Title from "../components/Title";
import EducationItem from "../components/EducationItem";
import educationList from "../assets/database/education.json";

const useStyles = makeStyles(theme => createStyles({
    EducationView: {},
    content: {
        display: "flex"
    }
}));

const EducationView = () => {
    const classes = useStyles();
    return <div id={"Education"} className={classes.EducationView}>
        <Title title={"Education"} subTitle={"where i grow up"}/>
        <div className={classes.content}>
            {educationList.map((item) => {
                return <EducationItem {...item}/>
            })}
        </div>
    </div>
}

export default EducationView;
