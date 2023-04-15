import React from "react";
import {createStyles, makeStyles} from "@material-ui/core";
import Title from "../components/Title";
import MyPicture from "../components/MyPicture";
import {Tag} from 'antd';
import {
    FacebookOutlined,
    LinkedinOutlined,
    TwitterOutlined,
    YoutubeOutlined,
} from '@ant-design/icons';
import {BreakPoints} from "../utils/constants";

const {laptop, tablet} = BreakPoints;

const useStyles = makeStyles(theme => createStyles({
    BasicView: {},
    body: {
        [theme.breakpoints.down(laptop)]: {
            flexDirection: "column"
        },
        display: "flex",
        alignItems: "center"
    },
    content: {
        [theme.breakpoints.down(laptop)]: {
            marginLeft: 10,
        },
        marginLeft: 50,
        marginTop: 20
    },
    name: {
        [theme.breakpoints.down(tablet)]: {
            fontSize: 23,
        },
        fontSize: 27,
        fontFamily: "bigTitleFont",
        fontWeight: 600,
        color: "#7daed3",
        letterSpacing: 1,
        marginBottom: 5
    },
    nameUnderline: {
        display: "inline",
        borderBottom: "3px solid red"
    },
    tags: {
        marginBottom: 15
    },
    paragraph: {
        fontFamily: "Montserrat",
        fontSize: 15,
        marginBottom: 15,
        lineHeight: "27px",
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

const BasicView = () => {
    const classes = useStyles();
    return <div id={"Basic"} className={classes.BasicView}>
        <Title title={"Basic Info"} subTitle={"about me"}/>
        <div className={classes.body}>

            <MyPicture/>

            <div className={classes.content}>
                <div className={classes.name}>
                    Hi, I am <div className={classes.nameUnderline}>Yuhua Zhou</div> (周煜华)
                </div>
                <div className={classes.tags}>
                    <Tag icon={<TwitterOutlined/>} color="#55acee">Sing</Tag>
                    <Tag icon={<YoutubeOutlined/>} color="#cd201f">Dance</Tag>
                    <Tag icon={<FacebookOutlined/>} color="#3b5999">Rap</Tag>
                    <Tag icon={<LinkedinOutlined/>} color="#55acee">Basketball</Tag>
                </div>

                {/*basic*/}
                <div className={classes.paragraph}>
                    Welcome and thank you for visiting my site! I'm a Ph.D candidate at
                    <a className={classes.link} href={"https://zjuidg.org"} target={"_blank"} rel="noreferrer">
                        Interactive Data Group (IDG)
                    </a>
                    of State key Lab of Cad & CG, College of Computer Technology, Zhejiang University, supervised by
                    <a className={classes.link} href={"https://person.zju.edu.cn/ycwu"} target={"_blank"}
                       rel="noreferrer">
                        Prof. Yingcai Wu.
                    </a>
                    I received my Bachelor's degree of Computer Science and Technology from Zhejiang
                    Sci-tech University.
                </div>

                {/*master*/}
                <div className={classes.paragraph}>
                    I am enthusiastic about mapping into the main learning tasks in Artificial Intelligence (AI) to
                    bridge the needs in visualization with the capabilities of AI.
                    Currently, my research interest mainly lies in AI4VIS, which aims to apply the Machine Learning
                    technology to the visualization, whose sub-directions including
                    <span className={classes.underline}>Visualization Generation</span>,
                    <span className={classes.underline}>Visualization Recommendation</span>,
                    <span className={classes.underline}>Visualization Assessment</span>,
                    <span className={classes.underline}>Chart Mining</span>,
                    <span className={classes.underline}>Chart Understand</span>, and so on.
                    Specifically, many of them involve data storytelling, which tell story with data and communicating
                    data insights to the masses. My another research interest lies in Explainable AI (XAI), which aims
                    to open the black box of AI and make it interpretable with Visualization.
                </div>

                {/*doctoral*/}
                <div className={classes.paragraph}>

                </div>
            </div>
        </div>
    </div>
}

export default BasicView;
