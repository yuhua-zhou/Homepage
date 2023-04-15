import React from "react";
import {createStyles, makeStyles} from "@material-ui/core";
import Title from "../components/Title";
import lifeList from "../assets/database/lifes.json";
import LifeItem from "../components/LifeItem";
import {getListKey} from "../utils/utils";
import ExpandableLayout from "../components/ExpandableLayout";

const useStyles = makeStyles(theme => createStyles({
    LifeView: {},
}));

const LifeView = () => {
    const classes = useStyles();
    return <div id={"Life"} className={classes.LifeView}>
        <Title title={"My Life"} subTitle={"I enjoy my life in my spare time"}/>

        <div>
            In my spare time, I enjoy taking exercise to strengthen
            my body as well as to refresh my tied brain, especially playing basketball. Besides, watching
            movies, playing computer games, and enjoy tasted food are also fulfilling my life. I believe the
            attitude of work and life balance can be helpful for my research career.
        </div>

        <ExpandableLayout rows={2} style={{
            background: "#f4f4f4"
        }}>
            {lifeList.map((item: any) => {
                return <LifeItem
                    key={getListKey(item)}
                    {...item}/>
            })}
        </ExpandableLayout>
    </div>
}

export default LifeView;
