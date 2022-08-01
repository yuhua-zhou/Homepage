import React, {useEffect, useState} from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import {createStyles, makeStyles} from "@material-ui/core";
import BasicView from "./views/BasicView";
import EducationView from "./views/EducationView";
import PublicationView from "./views/PublicationView";
import AwardView from "./views/AwardView";
import LifeView from "./views/LifeView";
import ContactView from "./views/ContactView";
import {Divider} from "antd";

const useStyles = makeStyles(theme => createStyles({
    App: {
        width: '100vw',
        height: '100vh',
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    body: {
        width: "100%",
        padding: "30px",
        flex: 1,
        overflowY: "scroll",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    content: {
        width: 1190,
    }
}));


const App = () => {
    const classes = useStyles();
    const navigations = ["Basic", "Education", "Publications", "Awards", "Life", "Contact"];

    useEffect(() => {
        window.addEventListener("scroll", onScrollChange, true);
    }, [])

    const scrollToAnchor = (anchorname: string) => {
        if (anchorname) {
            const anchorElement = document.getElementById(anchorname);
            if (anchorElement) {
                anchorElement.scrollIntoView({behavior: "smooth", block: "start"})
            }
        }
    }

    const onScrollChange = (event: any) => {
        const {scrollTop} = event.target;
        const offsets: number[] = navigations.map((name) => {
            const element = document.getElementById(name);
            if (element) {
                return element.offsetTop;
            }
            return 0;
        })

        // const index = offsets.findIndex((o) => o === 1);
    }

    return <div className={classes.App}>
        <Navigation onItemClick={scrollToAnchor} navigations={navigations}/>

        <div className={classes.body}>
            <div className={classes.content}>
                <BasicView/>
                <Divider/>
                <EducationView/>
                <Divider/>
                <PublicationView/>
                <Divider/>
                <AwardView/>
                <Divider/>
                <LifeView/>
                <Divider/>
                <ContactView/>
            </div>
        </div>
    </div>
}

export default App;
