import React, {useCallback, useMemo, useState} from "react";
import {createStyles, makeStyles} from "@material-ui/core";
import Title from "../components/Title";

import firstAward from "../assets/image/firstAward.png";
import secondAward from "../assets/image/secondAward.png";
import thirdAward from "../assets/image/thirdAward.png";
import honor from "../assets/image/honor.png";
import certificate from "../assets/image/certificate.png";

import awardCupImg from "../assets/image/award_cup.png"
import AwardItem from "../components/AwardItem";

import awardList from "../assets/database/awards.json";

const useStyles = makeStyles(theme => createStyles({
    AwardView: {},
    icon: {
        width: 23,
        height: 23,
        marginRight: 5
    },
    awardCup: {
        height: 100
    },
    controlBar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    radioGroup: {
        display: "flex",
        alignItems: "center",
    },
    radioBtn: {
        display: "flex",
        alignItems: "center",
        fontSize: 15,
        padding: 3,
        borderRadius: 1,
        margin: "0 3px",
        fontWeight: 600,
        border: "1.5px solid #233",
        cursor: "pointer"
    },
    awardList: {
        display: "flex",
        flexWrap: "wrap"
    }
}));

const AwardView = () => {
    const classes = useStyles();
    const filterList = [
        {icon: firstAward, text: "First Award", color: "#d7191c"},
        {icon: secondAward, text: "Second Award", color: "#fdae61"},
        {icon: thirdAward, text: "Third Award", color: "#2b83ba"},
        {icon: honor, text: "Honor", color: "#abdda4"},
        {icon: certificate, text: "Certificate", color: "#998ec3"},
    ];

    const [activeItems, setActiveItems] = useState([true, true, true, true, true]);

    const getStyle = useCallback((i: number) => {
        const {color} = filterList[i];
        let newStyle: any = {};

        if (activeItems[i]) {
            newStyle = {
                color: "white",
                background: color,
                borderColor: color
            }
        } else {
            newStyle = {
                color,
                borderColor: color
            }
        }
        return newStyle;
    }, [activeItems]);

    const checkToggle = (i: number) => {
        let newList = activeItems.slice();
        newList[i] = !newList[i];
        setActiveItems(newList);
    }

    const filterAwards = useMemo(() => {
        const temp = filterList.map((item) => {
            return item.text.replace(" ", "").toLowerCase();
        });

        return awardList.filter((item) => {
            const {award} = item;
            const index = temp.findIndex((t) => t === award.toLowerCase());
            return activeItems[index];
        })
    }, [activeItems])

    return <div id={"Awards"} className={classes.AwardView}>
        <Title title={"Award"} subTitle={"what i gained from competition"}/>
        <div className={classes.controlBar}>
            <div className={classes.radioGroup}>
                {filterList.map((item, i) => {
                    const {icon, text} = item;
                    return <div className={classes.radioBtn}
                                style={getStyle(i)}
                                onClick={() => checkToggle(i)}>
                        <img src={icon} className={classes.icon}/>
                        <span>{text}</span>
                    </div>
                })}
            </div>

            <img src={awardCupImg} className={classes.awardCup}/>
        </div>
        <div className={classes.awardList}>
            {filterAwards.map((item) => {
                return <AwardItem {...item}/>;
            })}
        </div>
    </div>
}

export default AwardView;
