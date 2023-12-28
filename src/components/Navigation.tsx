import React, {useCallback, useEffect, useRef, useState} from "react";
import {createStyles, makeStyles} from "@material-ui/core";
import {RightOutlined, EyeOutlined, MenuOutlined} from "@ant-design/icons";
import logo from "../assets/image/logo.png";
import {Popover} from "antd";

import {BreakPoints} from "../utils/constants";
import {findNearestInArray} from "../utils/utils";

const {laptop} = BreakPoints;

const useStyles = makeStyles(theme => createStyles({
    Container: {
        width: '100%',
        fontWeight: 700,
        //fontSize: 14,
        fontSize: 15,
    },
    Navigation: {
        width: '100%',
        //height: '53px',
        height: '58px',
        backgroundColor: "#bdd7e7",
        display: "flex",
        alignItems: "center",
    },
    logo: {
        //height: 35,
        height: 37,
        marginLeft: 25,
        marginRight: 30,
        cursor: "pointer"
    },
    menuBtn: {
        cursor: "pointer",
        fontSize: 20,
        [theme.breakpoints.up(laptop)]: {
            display: "none",
            transition: "0.5s",
        },
    },
    menuHorizontal: {
        display: "flex",
        alignItems: "center",
        marginLeft: 10,
        transition: "0.5s",

        [theme.breakpoints.down(laptop)]: {
            width: 0,
            overflow: "hidden",
        },
    },
    menuVertical: {
        [theme.breakpoints.up(laptop)]: {
            display: "none"
        },
        overflow: "hidden",
        backgroundColor: "#bdd7e7",
        transition: "all 1s",
    },
    item: {
        // vertical
        [theme.breakpoints.down(laptop)]: {
            cursor: "pointer",
            lineHeight: "33px",
            transition: "0.5s",
            padding: 5,
            borderBottom: "1px solid #DADADA"
        },

        // horizontal
        [theme.breakpoints.up(laptop)]: {
            padding: "0 15px",
            margin: "0 3px",
            cursor: "pointer",
            // lineHeight: "53px",
            lineHeight: "58px",
            transition: "0.5s",
        },

        "&:hover": {
            backgroundColor: "#6baed6",
            transition: "1s",
        }
    },
    itemSelected: {
        // vertical
        [theme.breakpoints.down(laptop)]: {
            cursor: "pointer",
            backgroundColor: "#6baed6",
            lineHeight: "33px",
            padding: 5,
            borderBottom: "1px solid #DADADA"
        },

        // horizontal
        [theme.breakpoints.up(laptop)]: {
            padding: "0 15px",
            margin: "0 3px",
            cursor: "pointer",
            backgroundColor: "#6baed6",
             // lineHeight: "53px",
            lineHeight: "58px",
        },
    },
    blogBtn: {
        height: '58px',
        marginLeft: "auto",
        marginRight: 25,
        cursor: "pointer",
        position: "relative",
        display: "flex",
        alignItems: "center",

        "&:hover > $blogText": {
            transition: "0.4s",
            right: 15
        }
    },
    blogText: {
        // width: 60,
        width: 70,
        background: "#bdd7e7",
        position: "absolute",
        // lineHeight: "53px",
        lineHeight: "58px",
        right: 0,
        transition: "0.4s",
    }
}));

interface NavigationProps {
    navigations: string[],
}

// 加一个这个动效 https://254-online.com/shape-visual-element-graphic-design/
const Navigation: React.FC<NavigationProps> = ({navigations}) => {
    const classes = useStyles();
    const currentNode = useRef(null);

    const [visitCount, setVisitCount] = useState(0);
    const [collapse, setCollapse] = useState(true); //
    const [selectedIndex, setSelectedIndex] = useState(0); // selected index

    // on menu item click
    const onMenuItemClick = (i: number) => {
        setSelectedIndex(i);
        scrollToAnchor(navigations[i]);
    }

    // goto my blog
    const goToBlog = () => {
        // window.open("https://zyh533.github.io/SizerBlog/#/index/home")
        window.open("https://github.com/yuhua-zhou")
    }

    // logo弹窗，显示访问人数
    const popupContent = () => {
        // https://github.com/finisky/finicounter
        return <div>
            <EyeOutlined style={{marginRight: 5}}/>
            Visited Counts: <span>{visitCount}</span>
        </div>
    }

    // menu component
    const MenuComponent = () => {
        return navigations.map((item, i) => {
            return <div className={i === selectedIndex ? classes.itemSelected : classes.item}
                        key={item}
                        onClick={() => onMenuItemClick(i)}>
                {item}
            </div>
        })
    }

    // scroll to target anchor
    const scrollToAnchor = (anchorname: string) => {
        if (anchorname) {
            const anchorElement = document.getElementById(anchorname);
            if (anchorElement) {
                // remove the listener
                // window.removeEventListener("scroll", onScrollChange, true);

                // scroll to view
                anchorElement.scrollIntoView({behavior: "smooth", block: "start"});

                // after 1s, add listener
                // setTimeout(() => {
                //     window.addEventListener("scroll", onScrollChange, true);
                // }, 1000)
            }
        }
    }

    // scroll change
    const onScrollChange = useCallback((event: any) => {
        const {scrollTop} = event.target;

        console.log(scrollTop)

        const offsets: number[] = navigations.map((name) => {
            const element = document.getElementById(name);
            if (element) {
                return element.offsetTop;
            }
            return 0;
        })

        const index = findNearestInArray(offsets, scrollTop);
        setSelectedIndex(index)
    }, [navigations])

    useEffect(() => {
        window.addEventListener("scroll", onScrollChange, true);
    }, [onScrollChange])

    useEffect(() => {
        // get visit count
        fetch("https://finicounter.vercel.app/counter?host=yuhua-zhou.github.io").then((res) => {
            if (res.status === 200) {
                res.json().then(data => {
                    // @ts-ignore
                    setVisitCount(data.views);
                })
            }
        }, () => {
            console.log("network error!");
        })

    }, [])

    return <div className={classes.Container}>
        <div className={classes.Navigation} ref={currentNode}>

            <Popover content={popupContent} title="" trigger="click">
                <img className={classes.logo} src={logo} alt={""}/>
            </Popover>

            <MenuOutlined className={classes.menuBtn}
                          onClick={() => setCollapse(!collapse)}/>

            {/*horizontal menu items*/}
            <div className={classes.menuHorizontal}>
                {MenuComponent()}
            </div>

            {/*go to blog btn*/}
            <div className={classes.blogBtn} onClick={goToBlog}>
                <div className={classes.blogText}>My Blog</div>
                <RightOutlined/>
            </div>
        </div>

        {/*vertical menu items*/}
        <div className={classes.menuVertical} style={{height: collapse ? 0 : 310}}>
            {MenuComponent()}
        </div>
    </div>

}

export default Navigation;
