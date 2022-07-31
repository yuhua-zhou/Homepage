import React, {useMemo} from "react";
import {createStyles, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => createStyles({
    PublicationItem: {
        height: 150,
        backgroundColor: "#f5f5f5",
        margin: "5px 0",
        padding: 10,
        borderRadius: 5,
        display: "flex",
        fontFamily: "Montserrat"
    },
    teaser: {
        width: 250
    },
    content: {
        marginLeft: 10
    },
    title: {
        fontSize: 17,
        fontWeight: 600,
        marginBottom: 7
    },
    award: {
        color: "red",
        marginLeft: 5
    },
    author: {
        display: "flex",
        alignItems: "center",
        color: "#767676"
    },
    meAuthor: {
        fontWeight: 700,
        color: "#474747",
        fontSize: 15
    },
    journal: {}
}));

interface PublicationItemProps {
    teaser: string,
    title: string,
    award: string,
    author: string,
    me: number,
    journal: string
}

const PublicationItem: React.FC<PublicationItemProps> = ({teaser, title, award, author, me, journal}) => {
    const classes = useStyles();
    const imgSrc = require("../assets/image/" + teaser + ".png").default;
    const authorList = useMemo(() => {
        return author.split(",")
    }, [author])

    return <div className={classes.PublicationItem}>
        <img className={classes.teaser} src={imgSrc}/>
        <div className={classes.content}>
            <div className={classes.title}>
                <span>{title}</span>
                {award !== "" && <span className={classes.award}>[{award}]</span>}
            </div>

            <div className={classes.author}>
                {authorList.map((item, index) => {
                    if (index === me) {
                        return <div className={classes.meAuthor}>{item}, </div>
                    }
                    return <div>{item}, </div>
                })}
            </div>
            <div className={classes.journal}>
                {journal}
            </div>
        </div>
    </div>
}

export default PublicationItem;
