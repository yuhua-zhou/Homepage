import React from "react";
import {createStyles, makeStyles} from "@material-ui/core";
import Title from "../components/Title";
import MyPicture from "../components/MyPicture";
import {Divider, Tag} from 'antd';
import {
    GithubOutlined,
    ZhihuOutlined,
    GoogleOutlined,
} from '@ant-design/icons';
import {BreakPoints} from "../utils/constants";

const {laptop, tablet} = BreakPoints;

const useStyles = makeStyles(theme => createStyles({
    BiographyView: {},
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
        marginBottom: 15,
        "& > *": {
            cursor: 'pointer'
        }
    },
    paragraph: {
        fontSize: "1.2em",
        marginBottom: 10,
        lineHeight: 1.5,
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

const BiographyView = () => {
    const classes = useStyles();

    // my media
    const medias = [
        {name: "Github", icon: <GithubOutlined/>, color: "#474b56", link: "https://github.com/Zyh533"},
        {
            name: "Google Scholar",
            icon: <GoogleOutlined/>,
            color: "#ea4436",
            link: "https://scholar.google.com/citations?user=dzOBRToAAAAJ&hl=zh-CN"
        },
        {name: "Zhihu", icon: <ZhihuOutlined/>, color: "#55acee", link: "https://www.zhihu.com/people/mo-ye-34-29"},
    ];

    // click media go to the website
    const onMediaClick = (link: string) => {
        window.open(link);
    }

    return <div id={"Biography"} className={classes.BiographyView}>
        <Title title={"Biography"} subTitle={"about me"}/>
        <div className={classes.body}>

            <MyPicture/>

            <div className={classes.content}>
                <div className={classes.name}>
                    Hi, I am <div className={classes.nameUnderline}>Yuhua Zhou</div> (周煜华)
                </div>
                <div className={classes.tags}>
                    {medias.map((item) => {
                        const {name, color, icon, link} = item;
                        return <Tag icon={icon} color={color} onClick={() => onMediaClick(link)}>{name}</Tag>
                    })}
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

        <Divider/>
    </div>
}

export default BiographyView;
