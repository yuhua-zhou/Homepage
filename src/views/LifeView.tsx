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
