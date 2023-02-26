import React, {useEffect} from 'react';
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
import MileStoneView from "./views/MileStoneView";
import Footer from "./components/Footer";
import {findNearestInArray} from "./utils/utils";
import {useDispatch} from "react-redux";
import {BreakPoints} from "./utils/constants";

const { desktop} = BreakPoints;

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
        flex: 1,
        overflowY: "scroll",
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
    const dispatch = useDispatch();
    const navigations = ["Basic", "Education", "Publications", "Awards", "MileStones", "Life", "Contact"];

    useEffect(() => {
        window.addEventListener("scroll", onScrollChange, true);
    }, [])

    const scrollToAnchor = (anchorname: string) => {
        if (anchorname) {
            const anchorElement = document.getElementById(anchorname);
            if (anchorElement) {
                // remove the listener
                window.removeEventListener("scroll", onScrollChange, true);
                // scroll to view
                anchorElement.scrollIntoView({behavior: "smooth", block: "start"});

                // after 1s, add listener
                setTimeout(() => {
                    window.addEventListener("scroll", onScrollChange, true);
                }, 1000)
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

        const index = findNearestInArray(offsets, scrollTop);
        dispatch({type: "SetNavigateSelectedIndex", payload: index});
    }

    return <div className={classes.App}>
        <Navigation
            onItemClick={scrollToAnchor}
            navigations={navigations}/>

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
                <MileStoneView/>
                <Divider/>
                <LifeView/>
                <Divider/>
                <ContactView/>
            </div>
            <Footer/>
        </div>
    </div>
}

export default App;
