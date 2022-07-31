import React, {useState} from "react";
import {createStyles, makeStyles} from "@material-ui/core";
import {RightOutlined} from "@ant-design/icons";

const useStyles = makeStyles(theme => createStyles({
    Navigation: {
        width: '100%',
        height: '53px',
        backgroundColor: "#bdd7e7",
        display: "flex",
        alignItems: "center",
        fontWeight: 700,
        fontSize: 14,
        fontFamily: "'Helvetica', sans-serif"
    },
    logo: {
        backgroundColor: "#f5f5f5",
        width: 150,
        height: 40,
        marginLeft: 25,
        marginRight: 10
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
            transition: "0.5s",
            transform: "scale(1.1)"
        }
    }
}));

interface NavigationProps {
    navigations: string[],
    onItemClick: (anchorname: string) => void
}

const Navigation: React.FC<NavigationProps> = ({navigations, onItemClick}) => {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = useState(0);
    const onClick = (i: number) => {
        setSelectedIndex(i);
        onItemClick(navigations[i]);
    }

    const goToBlog = () => {
        window.open("https://www.baidu.com")
    }

    return <div className={classes.Navigation}>
        <div className={classes.logo}/>

        {navigations.map((item, i) => {
            return <div className={i === selectedIndex ? classes.itemSelected : classes.item}
                        key={item}
                        onClick={() => onClick(i)}>
                {item}
            </div>
        })}
        <div className={classes.blogItem} onClick={goToBlog}>
            My Blog
            <RightOutlined/>
        </div>
    </div>
}

export default Navigation;
