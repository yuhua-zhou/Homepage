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
        margin: "0 3px",
        cursor: "pointer",
        lineHeight: "53px",
        textTransform: "uppercase",

        "&:hover": {
            backgroundColor: "#6baed6",
        }
    },
    itemSelected: {
        padding: "0 30px",
        margin: "0 3px",
        cursor: "pointer",
        backgroundColor: "#6baed6",
        lineHeight: "53px",
        textTransform: "uppercase",
    },
    blogItem: {
        marginLeft: "auto",
        marginRight: 25,
        cursor: "pointer",

        "&:hover": {
            transition: "1s",
            scale: 1.5
        }
    }
}));

interface NavigationProps {
    onItemClick: (anchorname: string) => void
}

const Navigation: React.FC<NavigationProps> = ({onItemClick}) => {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = useState(0);
    const navigations = ["Basic", "Education", "Publication", "Award", "Life", "Contact"]
    const onClick = (i: number) => {
        setSelectedIndex(i);
        onItemClick(navigations[i]);
    }

    return <div className={classes.Navigation}>
        {navigations.map((item, i) => {
            return <div className={i === selectedIndex ? classes.itemSelected : classes.item}
                        key={item}
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
