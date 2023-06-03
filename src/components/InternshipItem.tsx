import React from "react";
import {createStyles, makeStyles} from "@material-ui/core";
import zjlabImg from "../assets/image/zjlab.png";

const useStyles = makeStyles(theme => createStyles({
    InternshipItem: {
        margin: "5px 0 5px 15px",
        fontSize: "1.1em",
    },
    company: {
        display: "flex",
        alignItems: "center",
        fontSize: "1.2em",
        fontWeight: "bold",
        color: "#000"
    },
    companyLogo: {
        width: 20,
        marginRight: 10
    },
    content: {
        marginLeft: 30
    },
    link: {
        color: "#7daed3",
        textDecoration: "underline",
        margin: "0 5px"
    },
    underline: {
        textDecoration: "underline",
        margin: "0 5px",
    }
}));

const InternshiItem = () => {
    const classes = useStyles();
    return <div className={classes.InternshipItem}>
        <a className={classes.company} href={"https://www.zhejianglab.com/"} target={"_blank"} rel="noreferrer">
            <img className={classes.companyLogo} src={zjlabImg} alt={""}/>
            ZheJiang Lab (2021/03 - Now)
        </a>
        <div className={classes.content}>
            I have practiced in Zhejiang lab, where the goal is to bridge the research with industry.
            I contributed as frontend developer in the JianWei Group to participate in developing the big data
            platform called
            <a className={classes.link} href={"https://nebula.zjvis.net"} target={"_blank"} rel="noreferrer">
                Nebula
            </a>
            and the manage system named Devops,
            in which I improve my coding skills.
        </div>

    </div>
}

export default InternshiItem;
