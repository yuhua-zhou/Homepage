import {createStyles, makeStyles} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(theme => createStyles({
    IconSet: {
        display: "inline"
    },
    icon: {
        width: 20,
    }
}));

type IProps = {
    name: string,
}

const IconSet: React.FC<IProps> = ({name}) => {
    const classes = useStyles();

    return <div className={classes.IconSet}>
        <img src={require("../assets/image/iconset/" + name + ".png")}
             className={classes.icon}
             alt={name}/>
    </div>
}

export default IconSet;
