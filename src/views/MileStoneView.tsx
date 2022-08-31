import React, {useMemo} from "react";
import Title from "../components/Title";
import {createStyles, makeStyles} from "@material-ui/core";
import mileStoneImg from "../assets/image/milestone.png";
import mileStoneList from "../assets/database/milestonelist.json";
import MileStoneItem from "../components/MileStoneItem";
import MileStoneYearHeader from "../components/MileStoneYearHeader";
import {getListKey} from "../utils/utils";

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

    const {years, myMileStones} = useMemo(() => {
        const years: string[] = [];
        const myMileStones: any = {};

        mileStoneList.forEach((item) => {
            const {date} = item;
            const [year,] = date.split("/");
            if (!years.includes(year)) {
                years.push(year);
                myMileStones[year] = [];
            }
            myMileStones[year].push(item);
        });

        return {years, myMileStones};
    }, [mileStoneList])

    return <div id={"MileStones"} className={classes.MileStoneView}>
        <Title title={"MileStones"} subTitle={"my latest news"}/>
        <div className={classes.content}>
            <div className={classes.mileStoneList}>
                {years.map((year) => {
                    return <div key={getListKey(year)}>
                        <MileStoneYearHeader year={year}/>
                        {myMileStones[year].map((item: any) => {
                            return <MileStoneItem key={getListKey(item)} {...item}/>
                        })}
                    </div>
                })}
            </div>
            <div>
                <img src={mileStoneImg} className={classes.mileStoneImg}/>
            </div>
        </div>
    </div>
}

export default MileStoneView;
