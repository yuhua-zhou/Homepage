import React from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import {createStyles, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => createStyles({
    App: {
        width: '100vw',
        height: '100vh',
    },
    content: {
        padding: "20px"
    }
}));

const App = () => {
    const classes = useStyles();
    return <div className={classes.App}>
        <Navigation/>
        <div className={classes.content}>
            content
        </div>
    </div>
}

export default App;
