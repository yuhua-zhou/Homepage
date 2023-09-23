import React from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import {createStyles, makeStyles} from "@material-ui/core";
import BiographyView from "./views/BiographyView";
import EducationView from "./views/EducationView";
import PublicationView from "./views/PublicationView";
import AwardView from "./views/AwardView";
import LifeView from "./views/LifeView";
import ContactView from "./views/ContactView";
import MileStoneView from "./views/MileStoneView";
import Footer from "./components/Footer";
import {BreakPoints} from "./utils/constants";
import InternshipView from "./views/InternshipView";

const {desktop} = BreakPoints;

const useStyles = makeStyles(theme => createStyles({
    App: {
        width: '100vw',
        height: '100vh',
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "Arial",
    },
    body: {
        width: "100%",
        flex: 1,
        overflowY: "scroll",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    content: {
        [theme.breakpoints.up(desktop)]: {
            width: 1190 + 60,
            padding: 30
        },
        width: "100%",
        padding: 15
    }
}));

const App = () => {
    const classes = useStyles();
    const navigations = ["Biography", "MileStones", "Publications", "Internship", "Awards", "Education", "Life", "Contact"];

    return <div className={classes.App}>
        <Navigation navigations={navigations}/>

        <div className={classes.body}>
            <div className={classes.content}>
                <BiographyView/>
                <MileStoneView/>
                <PublicationView/>
                <InternshipView/>
                <AwardView/>
                <EducationView/>
                <LifeView/>
                <ContactView/>
            </div>
            <Footer/>
        </div>
    </div>
}

export default App;
