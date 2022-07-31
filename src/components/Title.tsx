import React from "react";
import {createStyles, makeStyles} from "@material-ui/core";
import titlePrefix from "../assets/image/titlePrefix.png";

interface TitleProps {
    title: string,
    subTitle: string
}

const useStyles = makeStyles(theme => createStyles({
    content: {
        display: "flex",
        alignItems: "center",
        padding: "3px 0",
        fontFamily: "Microsoft YaHei",
        marginBottom: 20
    },
    prefix: {
        height: 30,
        marginRight: 10
    },
    title: {
        fontSize: 18,
        fontWeight: 700
    },
    divider: {
        margin: "0 5px",
        fontWeight: 900
    },
    subtitle: {
        fontStyle: "italic",
        fontSize: 13,
        color:"#7b7b7b"
    }

}));

const Title: React.FC<TitleProps> = ({title, subTitle}) => {
    const classes = useStyles();
    return <div className={classes.content}>
        <img className={classes.prefix} src={titlePrefix}/>
        <div className={classes.title}>{title}</div>
        <div className={classes.divider}>/</div>
        <div className={classes.subtitle}>{subTitle}</div>
    </div>
}

export default Title;
