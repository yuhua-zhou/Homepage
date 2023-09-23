import React, {useMemo} from "react";
import {createStyles, makeStyles} from "@material-ui/core";

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
    horizontalBar: {
        width: 20,
        height: 2,
        background: "#000",
        margin: "0 15px"
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

interface InternshipItemProps {
    companyName: string
    date: string
    companyLogo: string
    companyHref: string
    groupName: string
    content: any[]
}

const InternshipItem: React.FC<InternshipItemProps> = ({
                                                           companyName,
                                                           date,
                                                           companyLogo,
                                                           companyHref,
                                                           groupName,
                                                           content
                                                       }) => {
    const classes = useStyles();

    const imgSrc = useMemo(() => {
        return require("../assets/image/internship/" + companyLogo);
    }, [companyLogo]);

    return <div className={classes.InternshipItem}>
        <a className={classes.company} href={companyHref} target={"_blank"} rel="noreferrer">
            <img className={classes.companyLogo} src={imgSrc} alt={""}/>
            <div>{companyName} ({date})</div>
            <div className={classes.horizontalBar}/>
            <div>{groupName}</div>
        </a>
        <div className={classes.content}>
            {content.map((item) => {
                const {type, content, href} = item;
                if (type === "link") {
                    return <a className={classes.link} href={href} target={"_blank"}
                              key={href}
                              rel="noreferrer">
                        {content}
                    </a>
                } else if (type === "text") {
                    return <span key={content}>
                        {content}
                    </span>
                }
            })}
        </div>

    </div>
}

export default InternshipItem;
