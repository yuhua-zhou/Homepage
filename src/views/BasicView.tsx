import React from "react";
import {createStyles, makeStyles} from "@material-ui/core";
import Title from "../components/Title";
import myPicture from "../assets/image/myPicture.png"
import MyPicture from "../components/MyPicture";
import { Tag } from 'antd';
import {
    FacebookOutlined,
    LinkedinOutlined,
    TwitterOutlined,
    YoutubeOutlined,
} from '@ant-design/icons';

const useStyles = makeStyles(theme => createStyles({
    BasicView: {},
    picture: {
        width: 300,
        height: 300,
        borderRadius: "50%",
        marginTop: 70,
        marginBottom: 70
    },
    body: {
        display: "flex"
    },
    content: {
        marginLeft: 50,
        marginTop: 20
    },
    name: {
        fontSize: 25,
        fontFamily: "微软雅黑",
        fontWeight: 700,
        color: "#7daed3",
        letterSpacing: 3
    },
    tags: {
        marginBottom: 15
    },
    paragraph: {
        fontFamily: "Montserrat",
        fontSize: 15,
        marginBottom: 20,
        lineHeight: "25px",
    },
    link: {
        color: "#7daed3",
        textDecoration: "underline",
        margin: "0 5px"
    }
}));

const BasicView = () => {
    const classes = useStyles();
    return <div id={"Basic"} className={classes.BasicView}>
        <Title title={"Basic Info"} subTitle={"about me"}/>
        <div className={classes.body}>

            <MyPicture/>

            <div className={classes.content}>
                <div className={classes.name}>Yuhua Zhou (周煜华)</div>
                <div className={classes.tags}>
                    <div>Sing, Dance, Rap, and Basketball</div>
                    <Tag icon={<TwitterOutlined />} color="#55acee">Twitter</Tag>
                    <Tag icon={<YoutubeOutlined />} color="#cd201f">Youtube</Tag>
                    <Tag icon={<FacebookOutlined />} color="#3b5999">Facebook</Tag>
                    <Tag icon={<LinkedinOutlined />} color="#55acee">LinkedIn</Tag>
                </div>

                <div className={classes.paragraph}>
                    Welcome and thank you for visiting my site! I'm a Ph.D candidate at
                    <a className={classes.link} href={"https://zjuidg.org"} target={"_blank"}>
                        Interactive Data Group (IDG)
                    </a>
                    of State key Lab of Cad & CG, College of Computer Technology, Zhejiang University, supervised by
                    Prof. Yingcai Wu. I received my Bachelor’s degree of Computer Science and Technology from Zhejiang
                    Sci-tech University.
                </div>
                <div className={classes.paragraph}>
                    I used to be a data journalist and learned design and coding by myself. I am enthusiastic about
                    telling story with data and communicating data insights to the masses. Currently, my research
                    interest mainly lies in data-driven storytelling, data visualization design, human-computer
                    interaction, and intelligent visualization.
                </div>
                <div className={classes.paragraph}>
                    I pay close attention to the application of data visualization in industries such as data
                    journalism, digital humanism, and business intelligence. I believe that visual literacy and data
                    related skills are vital in the big data era. I am also a part-time writer running a blog / writing
                    books / organizing events in China to introduce the latest progression and application of data
                    visualization as well as teaching visualization skills.
                </div>
            </div>
        </div>
    </div>
}

export default BasicView;
