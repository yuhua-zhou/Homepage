import React from "react";
import {createStyles, makeStyles} from "@material-ui/core";
import Title from "../components/Title";
import EducationItem from "../components/EducationItem";
import educationList from "../assets/database/education.json";
import {getListKey} from "../utils/utils";
import {BreakPoints} from "../utils/constants";

const {tablet} = BreakPoints;

const useStyles = makeStyles(theme => createStyles({
    EducationView: {},
    content: {
        [theme.breakpoints.up(tablet)]: {
            display: "flex"
        },
    }
}));

const EducationView = () => {
    const classes = useStyles();
    return <div id={"Education"} className={classes.EducationView}>
        <Title title={"Education"} subTitle={"my growth"}/>
        <div className={classes.content}>
            {educationList.map((item) => {
                return <EducationItem
                    key={getListKey(item)} {...item}/>
            })}
        </div>
    </div>
}

export default EducationView;
