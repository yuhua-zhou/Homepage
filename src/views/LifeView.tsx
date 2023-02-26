import React, {useState} from "react";
import {createStyles, makeStyles} from "@material-ui/core";
import Title from "../components/Title";
import {Button} from "antd";
import lifeList from "../assets/database/lifes.json";
import LifeItem from "../components/LifeItem";
import {getListKey} from "../utils/utils";
import ExpandableLayout from "../components/ExpandableLayout";

const useStyles = makeStyles(theme => createStyles({
    LifeView: {},
    content: {
        marginTop: 20,
        transition: "all 1s",
        background: "#f4f4f4",
        padding: 10,
        fontFamily: "microsoft雅黑",
        overflow: "hidden"
    },
    toggleBtn: {
        marginTop: 10,
        cursor: "pointer",
        fontSize: 14
    }
}));

const LifeView = () => {
    const classes = useStyles();
    const [expand, setExpand] = useState(true);
    const contentHeight = Math.ceil((lifeList.length) / 4) * 270 + 20;

    const onExpandToggle = () => {
        setExpand(!expand);
    }
    return <div id={"Life"} className={classes.LifeView}>
        <Title title={"My Life"} subTitle={"I enjoy my life in my spare time"}/>

        {/*<ExpandableLayout rows={0} style={{*/}
        {/*    marginTop: 20,*/}
        {/*    background: "#f4f4f4",*/}
        {/*    padding: 10,*/}
        {/*    fontFamily: "microsoft雅黑",*/}
        {/*}}>*/}
        {/*    <div>213</div>*/}
        {/*    <div>213</div>*/}
        {/*    <div>123<br/>456</div>*/}
        {/*</ExpandableLayout>*/}

        <div className={classes.content}
             style={{height: expand ? contentHeight : 270 + 20}}
        >
            {lifeList.map((item: any) => {
                return <LifeItem
                    key={getListKey(item)}
                    {...item}/>
            })}
        </div>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Button className={classes.toggleBtn}
                    onClick={onExpandToggle}>
                {expand ? "Collapse" : "Expand"}
            </Button>
        </div>
    </div>
}

export default LifeView;
