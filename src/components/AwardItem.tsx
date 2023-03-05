import React from "react";
import {createStyles, makeStyles} from "@material-ui/core";
import {Image} from 'antd';
import {BreakPoints} from "../utils/constants";
import IconSet from "./IconSet";

const {tablet} = BreakPoints;

const useStyles = makeStyles(theme => createStyles({
    AwardItem: {
        [theme.breakpoints.down(tablet)]: {
            fontSize: 13,
        },
        display: "flex",
        alignItems: "center",
        fontWeight: 600,
        fontSize: 16,
        margin: 5
    },
    text: {
        margin: "0 10px",
        textDecoration: "underline"
    },
    icon: {
        width: 20,
        height: 20,
    }
}));

interface AwardItemProps {
    image: string
    text: string
    award: string
}

const AwardItem: React.FC<AwardItemProps> = ({image, text, award}) => {
    const classes = useStyles();

    return <div className={classes.AwardItem}>

        <IconSet name={award}/>

        <div className={classes.text}>{text}</div>

        <Image height={30} width={50}
               src={require("../assets/image/award/" + image).default}/>
    </div>
}

export default AwardItem;

