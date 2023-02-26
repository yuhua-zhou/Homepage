import React from "react";
import {createStyles, makeStyles} from "@material-ui/core";
import Title from "../components/Title";
import awardCupImg from "../assets/image/award_cup.png"
import AwardItem from "../components/AwardItem";

import awardList from "../assets/database/awards.json";
import {getListKey} from "../utils/utils";
import {BreakPoints} from "../utils/constants";

const {tablet} = BreakPoints;

const useStyles = makeStyles(theme => createStyles({
    AwardView: {
        position: "relative"
    },
    icon: {
        width: 23,
        height: 23,
        marginRight: 5
    },
    awardCup: {
        [theme.breakpoints.down(tablet)]: {
            display: "none"
        },
        position: "absolute",
        height: 150,
        right: 0,
        top: 0
    },
    controlBar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 5
    },
    awardList: {}
}));

const AwardView = () => {
    const classes = useStyles();

    return <div id={"Awards"} className={classes.AwardView}>
        <Title title={"Award"} subTitle={"my honors & awards & certifications"}/>
        <div className={classes.controlBar}>
            <img src={awardCupImg} className={classes.awardCup} alt={""}/>
        </div>
        <div className={classes.awardList}>
            {awardList.map((item) => {
                return <AwardItem key={getListKey(item)} {...item}/>;
            })}
        </div>
    </div>
}

export default AwardView;
