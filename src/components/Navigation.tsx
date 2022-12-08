import React, {useEffect, useRef, useState} from "react";
import {createStyles, makeStyles} from "@material-ui/core";
import {RightOutlined, EyeOutlined} from "@ant-design/icons";
import logo from "../assets/image/logo.png";
import {useGlobalState} from "../store/useData";
import {useDispatch} from "react-redux";
import ResizeObserver from "resize-observer-polyfill";
import {Popover} from "antd";

const useStyles = makeStyles(theme => createStyles({
    Navigation: {
        width: '100%',
        height: '53px',
        backgroundColor: "#bdd7e7",
        display: "flex",
        alignItems: "center",
        fontWeight: 700,
        fontSize: 14,
        fontFamily: "'Helvetica', sans-serif"
    },
    logo: {
        height: 35,
        marginLeft: 25,
        marginRight: 30,
        cursor: "pointer"
    },
    item: {
        padding: "0 25px",
        margin: "0 3px",
        cursor: "pointer",
        lineHeight: "53px",
        transition: "0.5s",

        "&:hover": {
            backgroundColor: "#6baed6",
            transition: "1s",
        }
    },
    itemSelected: {
        padding: "0 25px",
        margin: "0 3px",
        cursor: "pointer",
        backgroundColor: "#6baed6",
        lineHeight: "53px",
    },
    blogBtn: {
        height: '53px',
        marginLeft: "auto",
        marginRight: 25,
        cursor: "pointer",
        position: "relative",
        display: "flex",
        alignItems: "center",

        "&:hover > $blogText": {
            transition: "0.4s",
            right: 15
        }
    },
    blogText: {
        width: 60,
        background: "#bdd7e7",
        position: "absolute",
        lineHeight: "53px",
        right: 0,
        transition: "0.4s",
    }
}));

interface NavigationProps {
    navigations: string[],
    onItemClick: (anchorname: string) => void,
}

const Navigation: React.FC<NavigationProps> = ({navigations, onItemClick}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {navigateSelectedIndex} = useGlobalState();
    const currentNode = useRef(null);

    const onClick = (i: number) => {
        dispatch({type: "SetNavigateSelectedIndex", payload: i});
        onItemClick(navigations[i]);
    }

    const goToBlog = () => {
        // window.open("https://zyh533.github.io/SizerBlog/#/index/home")
        window.open("https://github.com/Zyh533")
    }

    const popupContent = () => {
        // const res = await fetch("url");
        // https://github.com/finisky/finicounter
        const count = 1;
        return <div>
            <EyeOutlined style={{marginRight: 5}}/>
            Visited Counts: <span id="finicount_views"/>
        </div>
    }

    useEffect(() => {
        const resizeObserver = new ResizeObserver((entries, observer) => {
            for (const entry of entries) {
                const {left, top, width, height} = entry.contentRect;

                if (width <= 1000) {
                    console.log(width);
                }
            }
        });
        // @ts-ignore
        resizeObserver.observe(currentNode.current);
    }, [])

    return <div className={classes.Navigation} ref={currentNode}>

        <Popover content={popupContent} title="" trigger="click">
            <img className={classes.logo} src={logo}/>
        </Popover>

        {navigations.map((item, i) => {
            return <div className={i === navigateSelectedIndex ? classes.itemSelected : classes.item}
                        key={item}
                        onClick={() => onClick(i)}>
                {item}
            </div>
        })}
        <div className={classes.blogBtn} onClick={goToBlog}>
            <div className={classes.blogText}>My Blog</div>
            <RightOutlined/>
        </div>
    </div>
}

export default Navigation;
