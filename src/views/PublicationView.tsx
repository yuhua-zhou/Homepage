import React from "react";
import {createStyles, makeStyles} from "@material-ui/core";
import Title from "../components/Title";
import PublicationItem from "../components/PublicationItem";
import publicationsList from "../assets/database/publications.json";
import {getListKey} from "../utils/utils";

const useStyles = makeStyles(theme => createStyles({
    PublicationView: {},
}));

const PublicationView = () => {
    const classes = useStyles();

    return <div id={"Publications"} className={classes.PublicationView}>
        <Title title={"Publications"} subTitle={"my research direction"}/>
        {publicationsList.map((item) => {
            return <PublicationItem
                key={getListKey(item)} {...item}/>
        })}
    </div>
}

export default PublicationView;
