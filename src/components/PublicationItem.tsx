import React, {useMemo} from "react";
import {createStyles, makeStyles} from "@material-ui/core";
import {
    PaperClipOutlined,
    CodeSandboxOutlined,
    VideoCameraOutlined,
    GlobalOutlined,
    FundProjectionScreenOutlined
} from "@ant-design/icons";
import {BreakPoints} from "../utils/constants";
import IconSet from "./IconSet";

const {tablet} = BreakPoints;

const useStyles = makeStyles(theme => createStyles({
    PublicationItem: {
        [theme.breakpoints.down(tablet)]: {
            height: 100
        },
        height: 150,
        backgroundColor: "#f5f5f5",
        margin: "5px 0",
        padding: 10,
        borderRadius: 5,
        display: "flex",
        fontFamily: "Montserrat",
        position: "relative",

        "&:hover > $year": {
            backgroundColor: "red",
            transition: "0.5s",
        }
    },
    teaser: {
        [theme.breakpoints.down(tablet)]: {
            width: 120,
        },
        width: 250
    },
    content: {
        marginLeft: 10,
        flex: 1,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden"
    },
    title: {
        [theme.breakpoints.down(tablet)]: {
            fontSize: 12,
            marginBottom: 7
        },
        fontSize: 17,
        fontWeight: 600,
        marginBottom: 7
    },
    award: {
        color: "red",
        marginLeft: 10,
        fontWeight: 600
    },
    author: {
        [theme.breakpoints.down(tablet)]: {
            display: "none"
        },
        display: "flex",
        alignItems: "center",
        color: "#767676",

        "& > *": {
            marginRight: 5
        }
    },
    meAuthor: {
        [theme.breakpoints.down(tablet)]: {
            display: "none"
        },
        fontWeight: 700,
        color: "#474747",
        fontSize: 15,
        textDecoration: "underline"
    },
    journal: {
        [theme.breakpoints.down(tablet)]: {
            marginTop: 0,
        },
        marginTop: 10,
        color: "#767676",
        fontStyle: "italic"
    },
    publicationType: {
        marginRight: 5,
        color: "#000",
        fontWeight: 600,
        fontSize: 10,
        background: "#eebae1",
        padding: "2px 6px",
        borderRadius: 3
    },
    detail: {
        [theme.breakpoints.down(tablet)]: {
            display: "none"
        },
        marginTop: "auto",
        display: "flex",
        alignItems: "center",
    },
    link: {
        [theme.breakpoints.down(tablet)]: {
            display: "none"
        },
        margin: "0 5px",
        color: "#86bdec",

        "& > *": {
            marginRight: 3
        }
    },
    year: {
        [theme.breakpoints.down(tablet)]: {
            display: "none"
        },
        marginLeft: "auto",
        backgroundColor: "#000",
        color: "white",
        padding: "5px 15px",
        position: "absolute",
        right: 0,
        bottom: 0,
        transition: "0.5s",
        borderRadius: "0 0 5px 0"
    }
}));

interface PublicationItemProps {
    teaser: string,
    title: string,
    award: string,
    author: string,
    me: number,
    publicationType: string,
    journal: string,
    year: string,
    links: any
}

const PublicationItem: React.FC<PublicationItemProps> = ({
                                                             teaser,
                                                             title,
                                                             award,
                                                             author,
                                                             me,
                                                             publicationType,
                                                             journal,
                                                             year,
                                                             links
                                                         }) => {
    const classes = useStyles();
    const imgSrc = require("../assets/image/publication/" + teaser);
    const {pdf} = links;

    const authorList = useMemo(() => {
        return author.split(",")
    }, [author])

    const materials = useMemo(() => {
        const {website, video, presentation, code} = links;
        return [
            {link: website, icon: <GlobalOutlined/>, name: "Website"},
            {link: code, icon: <CodeSandboxOutlined/>, name: "Code"},
            {link: video, icon: <VideoCameraOutlined/>, name: "Video"},
            {link: presentation, icon: <FundProjectionScreenOutlined/>, name: "Presentation"},
        ]
    }, [links])

    return <div className={classes.PublicationItem}>
        <img className={classes.teaser} src={imgSrc} alt={""}/>
        <div className={classes.content}>
            <div className={classes.title}>{title}</div>

            <div className={classes.author}>
                {authorList.map((item, index) => {
                    if (index === me) {
                        return <div key={item} className={classes.meAuthor}>{item}, </div>
                    }
                    return <div key={item}>{item}, </div>
                })}
            </div>

            <div className={classes.journal}>
                <span className={classes.publicationType}>{publicationType}</span>
                <span>{journal}</span>
                {award !== "" && <span className={classes.award}>
                    <IconSet name={"firstAward"}/>
                    {award}
                </span>}
            </div>

            <div className={classes.detail}>
                [
                <div>
                    Paper:
                    <a className={classes.link}
                       href={pdf}
                       rel="noreferrer"
                       target={"_blank"}><PaperClipOutlined/>PDF</a>
                </div>
                <div style={{margin: "0 5px"}}>|</div>
                <div>
                    Materials:
                    {materials.map((item) => {
                        const {name, icon, link} = item;
                        if (link !== "") {
                            return <a className={classes.link} href={link}
                                      target={"_blank"} rel="noreferrer">{icon}{name}</a>
                        }
                        return <span/>;
                    })}
                </div>
                ]
            </div>
        </div>
        <div className={classes.year}>{year}</div>
    </div>
}

export default PublicationItem;
