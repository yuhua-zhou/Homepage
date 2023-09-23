import React from "react";
import {createStyles, makeStyles} from "@material-ui/core";
import Title from "../components/Title";
import EducationItem from "../components/EducationItem";
import {getListKey} from "../utils/utils";
import {BreakPoints} from "../utils/constants";
import {useGlobalState} from "../store/useData";
import {Divider} from "antd";

const {tablet} = BreakPoints;

const useStyles = makeStyles(theme => createStyles({
    EducationView: {
        width: "100%",
        overflow: "auto"
    },
    content: {
        [theme.breakpoints.up(tablet)]: {
            display: "flex"
        },
    }
}));

const EducationView = () => {
    const classes = useStyles();
    const {educationList} = useGlobalState();
    return <div id={"Education"} className={classes.EducationView}>
        <Title title={"Education"} subTitle={"my growth"}/>
        <div className={classes.content}>
            {educationList.map((item) => {
                return <EducationItem
                    key={getListKey(item)} {...item}/>
            })}
        </div>
        <Divider/>
    </div>
}

export default EducationView;
