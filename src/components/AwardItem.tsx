import React, { useState } from "react";
import { createStyles, makeStyles } from "@material-ui/core";
import { Image } from 'antd';
import { BreakPoints } from "../utils/constants";
import IconSet from "./IconSet";
import { EyeOutlined } from "@ant-design/icons";

const { tablet } = BreakPoints;

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
        margin: "3px 10px",
        textDecoration: "underline"
    },
    viewImage: {
        cursor: "pointer",

        "&:hover": {
            opacity: .6
        }
    }
}));

interface AwardItemProps {
    image: string
    text: string
    award: string
}

const AwardItem: React.FC<AwardItemProps> = ({ image, text, award }) => {
    const classes = useStyles();
    const [imageVisible, setImageVisible] = useState(false);
    const imageSrc = require("../assets/image/award/" + image)

    return <div className={classes.AwardItem}>

        <IconSet name={award} />

        <div className={classes.text}>{text}</div>

        <EyeOutlined
            className={classes.viewImage}
            onClick={() => setImageVisible(true)} />

        <Image height={0} width={0}
            src={imageSrc}
            style={{ display: 'none' }}
            preview={{
                visible: imageVisible,
                src: imageSrc,
                onVisibleChange: (value) => {
                    setImageVisible(value);
                },
            }}
        />
    </div>
}

export default AwardItem;

