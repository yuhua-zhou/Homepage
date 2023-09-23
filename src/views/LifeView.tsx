import React from "react";
import {createStyles, makeStyles} from "@material-ui/core";
import Title from "../components/Title";
import LifeItem from "../components/LifeItem";
import {getListKey} from "../utils/utils";
import ExpandableLayout from "../components/ExpandableLayout";
import {useGlobalState} from "../store/useData";
import {Divider} from "antd";
// import LazyLoad from 'react-lazyload';

const useStyles = makeStyles(theme => createStyles({
    LifeView: {},
    paragraph: {
        fontSize: "1.2em",
        marginBottom: 10,
        lineHeight: 1.5,
    },
}));

const LifeView = () => {
    const classes = useStyles();
    const {lifeList} = useGlobalState();
    return <div id={"Life"} className={classes.LifeView}>
        <Title title={"My Life"} subTitle={"I enjoy my life in my spare time"}/>

        <div className={classes.paragraph}>
            In my spare time, I enjoy taking exercise to strengthen
            my body as well as to refresh my tied brain, especially playing basketball. Besides, watching
            movies, playing computer games, and enjoy tasted food are also fulfilling my life. I believe the
            attitude of work and life balance can be helpful for my research career.
        </div>

        {/*<LazyLoad >*/}
        {/*    */}
        {/*</LazyLoad>*/}

        <ExpandableLayout rows={2} style={{
            background: "#f4f4f4"
        }}>
            {lifeList.map((item: any) => {
                return <LifeItem
                    key={getListKey(item)}
                    {...item}/>
            })}
        </ExpandableLayout>

        <Divider/>
    </div>
}

export default LifeView;
