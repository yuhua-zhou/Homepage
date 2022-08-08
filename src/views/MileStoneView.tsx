import React from "react";
import Title from "../components/Title";
import {createStyles, makeStyles} from "@material-ui/core";
import mileStoneImg from "../assets/image/milestone.png";
import mileStoneList from "../assets/database/milestonelist.json";
import MileStoneItem from "../components/MileStoneItem";
import MileStoneYearHeader from "../components/MileStoneYearHeader";

const useStyles = makeStyles(theme => createStyles({
    MileStoneView: {},
    content: {
        display: "flex",
    },
    mileStoneImg: {
        width: 200,
    },
    mileStoneList: {
        flex: 1,
        padding: 10
    },
}));

const MileStoneView = () => {
    const classes = useStyles();

    return <div id={"MileStones"} className={classes.MileStoneView}>
        <Title title={"MileStones"} subTitle={"my latest news"}/>
        <div className={classes.content}>
            <div className={classes.mileStoneList}>
                <MileStoneYearHeader year={"2022"}/>
                {mileStoneList.map((item) => {
                    return <MileStoneItem {...item}/>
                })}
            </div>
            <div>
                <img src={mileStoneImg} className={classes.mileStoneImg}/>
            </div>
        </div>
    </div>
}

export default MileStoneView;
