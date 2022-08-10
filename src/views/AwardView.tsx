import React from "react";
import {createStyles, makeStyles} from "@material-ui/core";
import Title from "../components/Title";

import firstAward from "../assets/image/firstAward.png";
import secondAward from "../assets/image/secondAward.png";
import thirdAward from "../assets/image/thirdAward.png";
import honor from "../assets/image/honor.png";

const useStyles = makeStyles(theme => createStyles({
    AwardView: {},
    icon: {
        width: 30,
        height: 30
    }
}));

const AwardView = () => {
    const classes = useStyles();
    return <div id={"Awards"} className={classes.AwardView}>
        <Title title={"Award"} subTitle={"what i gained from competition"}/>
        <div><img src={firstAward} className={classes.icon}/> 一等奖</div>
        <div><img src={secondAward} className={classes.icon}/> 二等奖</div>
        <div><img src={thirdAward} className={classes.icon}/> 三等奖</div>
        <div><img src={honor} className={classes.icon}/> 荣誉称号</div>
    </div>
}

export default AwardView;
