import React from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import {createStyles, makeStyles} from "@material-ui/core";
import BasicView from "./views/BasicView";
import EducationView from "./views/EducationView";
import PublicationView from "./views/PublicationView";
import AwardView from "./views/AwardView";
import LifeView from "./views/LifeView";
import ContactView from "./views/ContactView";

const useStyles = makeStyles(theme => createStyles({
    App: {
        width: '100vw',
        height: '100vh',
        overflowX: "hidden"
    },
    content: {
        padding: "20px"
    }
}));

const App = () => {
    const classes = useStyles();

    const scrollToAnchor = (anchorname: string) => {
        if (anchorname) {
            const anchorElement = document.getElementById(anchorname);
            if (anchorElement) {
                anchorElement.scrollIntoView({behavior: "smooth", block: "start"})
            }
        }
    }

    return <div className={classes.App}>
        <Navigation onItemClick={scrollToAnchor}/>
        <div className={classes.content}>
            <BasicView/>
            <EducationView/>
            <PublicationView/>
            <AwardView/>
            <LifeView/>
            <ContactView/>
        </div>
    </div>
}

export default App;
