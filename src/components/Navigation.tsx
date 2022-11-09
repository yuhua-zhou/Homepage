import React, {useState} from "react";
import {createStyles, makeStyles} from "@material-ui/core";
import {RightOutlined} from "@ant-design/icons";
import logo from "../assets/image/logo.png";
import {useGlobalState} from "../store/useData";
import {useDispatch} from "react-redux";

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
        marginRight: 30
    },
    item: {
        padding: "0 30px",
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
        padding: "0 30px",
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

    const onClick = (i: number) => {
        dispatch({type:"SetNavigateSelectedIndex", payload:i});
        onItemClick(navigations[i]);
    }

    const goToBlog = () => {
        // window.open("https://zyh533.github.io/SizerBlog/#/index/home")
        window.open("https://github.com/Zyh533")
    }

    return <div className={classes.Navigation}>
        <img className={classes.logo} src={logo}/>

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
