import React, {useState} from "react";
import {createStyles, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => createStyles({
    Navigation: {
        width: '100%',
        height: '53px',
        backgroundColor: "#bdd7e7",
        display: "flex",
        alignItems: "center",
        fontWeight: 700,
        fontSize: 15,
        fontFamily: "'Helvetica', sans-serif"
    },
    item: {
        padding: "0 30px",
        margin: "0 5px",
        cursor: "pointer",
        lineHeight: "53px",

        "&:hover": {
            backgroundColor: "#6baed6",
        }
    },
    itemSelected: {
        padding: "0 30px",
        margin: "0 5px",
        cursor: "pointer",
        backgroundColor: "#6baed6",
        lineHeight: "53px"
    },
    blogItem: {
        marginLeft: "auto",
        marginRight: 20,
        cursor: "pointer"
    }
}));

const Navigation = () => {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = useState(0);
    const navigations = ["Basic", "Education", "Publication", "Award", "Life", "Contact"]
    const onClick = (i: number) => {
        setSelectedIndex(i);
    }

    return <div className={classes.Navigation}>
        {navigations.map((item, i) => {
            return <div className={i === selectedIndex ? classes.itemSelected : classes.item}
                        onClick={() => onClick(i)}>
                {item}
            </div>
        })}
        <div className={classes.blogItem}>
            My Blog
        </div>
    </div>
}

export default Navigation;
