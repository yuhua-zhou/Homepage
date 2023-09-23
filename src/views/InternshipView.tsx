import Title from "../components/Title";
import React from "react";
import {createStyles, makeStyles} from "@material-ui/core";
import InternshipItem from "../components/InternshipItem";
import {useGlobalState} from "../store/useData";
import {Divider} from "antd";
import {getListKey} from "../utils/utils";

const useStyles = makeStyles(theme => createStyles({
    InternshipView: {},
}));

const InternshipView = () => {
    const classes = useStyles();
    const {internshipList} = useGlobalState();
    return <div id={"Internship"} className={classes.InternshipView}>
        <Title title={"Internship"} subTitle={"my work experience"}/>
        <div>
            {internshipList.map((item) => {
                return <InternshipItem
                    key={getListKey(item)}
                    {...item}/>
            })}
        </div>
        <Divider/>
    </div>
}

export default InternshipView;
