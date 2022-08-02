import React, {useState} from "react";
import {createStyles, makeStyles} from "@material-ui/core";
import Title from "../components/Title";
import {Button} from "antd";

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
    lifeItem: {
        margin: 10,
        padding: 10,
        background: "white",
        display: "inline-block",
        width: 272,
        height: 230,
        borderRadius: 3
    },
    lifeImg: {
        width: "100%",
        height: 130
    },
    lifeDesc: {
        marginTop: 5
    },
    toggleBtn: {
        marginTop: 10,
        cursor: "pointer",
        fontSize: 14
    }
}));

const LifeView = () => {
    const classes = useStyles();
    const [expand, setExpand] = useState(false);
    const lifeList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    const contentHeight = Math.ceil((lifeList.length) / 4) * 250 + 20;

    const onExpandToggle = () => {
        setExpand(!expand);
    }
    return <div id={"Life"} className={classes.LifeView}>
        <Title title={"My Life"} subTitle={"I enjoy my life in my spare time"}/>
        <div className={classes.content}
             style={{height: expand ? contentHeight : 250 + 20}}
        >
            {lifeList.map(() => {
                return <div className={classes.lifeItem}>
                    <img className={classes.lifeImg}/>
                    <div className={classes.lifeDesc}>xxxxxxxxxxxxxxxxxxxxxxx</div>
                </div>
            })}
        </div>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Button className={classes.toggleBtn} onClick={onExpandToggle}>
                {expand ? "Collapse" : "Expand"}
            </Button>
        </div>
    </div>
}

export default LifeView;
