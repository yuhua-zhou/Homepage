import React, {useEffect, useRef, useState} from "react";
import {createStyles, makeStyles} from "@material-ui/core";
import {CaretUpOutlined} from "@ant-design/icons";

const useStyles = makeStyles(theme => createStyles({
    ExpandableLayout: {
        marginTop: 20,
    },
    content: {
        transition: "all 1s",
        overflow: "hidden",
    },
    toggleBtn: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        fontSize: 14,
        marginTop: 5,
        padding: "5px 0",
        transition: "0.5s",
        fontWeight: 600,

        '&:hover': {
            background: "#fafafa",
        }
    }
}));

interface ExpandableLayoutProps {
    defaultExpand?: boolean,
    style?: any,
    rows: number
}

const ExpandableLayout: React.FC<ExpandableLayoutProps> = (props) => {
    const {defaultExpand, children, style, rows} = props;
    const classes = useStyles();
    const [expand, setExpand] = useState(defaultExpand);
    const contentRef = useRef(null);  // content ref

    const [contentStyle, setContentStyle] = useState({});

    // compute content style
    useEffect(() => {
        // when !collapse and default = 0
        const closeAll = (!expand && rows === 0);

        let contentHeight = closeAll ? 0 : 20;

        // mounted
        if (contentRef.current) {
            // @ts-ignore
            const contentWidth = contentRef.current.clientWidth - 20;

            // @ts-ignore
            const childrenElem = Array.from(contentRef.current.children); // HTMLCollection -> [HTMLElement...]

            let rowHeights = [0]; // row heights
            let currentRow = 0; // current row
            let restWidth = contentWidth; // rest width

            childrenElem.forEach((item: any) => {
                // child item style
                const itemStyle = window.getComputedStyle(item);
                let {width, height, marginLeft, marginRight, marginTop, marginBottom} = itemStyle;

                // @ts-ignore
                [width, height, marginLeft, marginRight, marginTop, marginBottom] =
                    [width, height, marginLeft, marginRight, marginTop, marginBottom].map((data) => {
                        return parseFloat(data.replace("px", ""));
                    })

                // @ts-ignore
                const itemWidth: number = width + marginLeft + marginRight;
                // @ts-ignore
                const itemHeight: number = height + marginTop + marginBottom;

                // set transition
                item.style.transition = "all 1s";

                // if expand show all item
                if (expand) {
                    item.style.visibility = "visible";

                    // if it can't contain this item, switch to next row
                    if (restWidth < itemWidth) {
                        restWidth = contentWidth - itemWidth;
                        currentRow++;
                        rowHeights.push(itemHeight);
                    } else {
                        restWidth -= itemWidth;
                        rowHeights[currentRow] = Math.max(itemHeight, rowHeights[currentRow]);
                    }
                } else {
                    if (currentRow >= rows) {
                        item.style.visibility = "hidden";
                    } else {
                        item.style.visibility = "visible";

                        // if it can't contain this item, switch to next row
                        if (restWidth < itemWidth) {
                            restWidth = contentWidth - itemWidth;
                            currentRow++;
                            if (currentRow >= rows) {
                                item.style.visibility = "hidden";
                            } else {
                                rowHeights.push(itemHeight);
                            }
                        } else {
                            restWidth -= itemWidth;
                            rowHeights[currentRow] = Math.max(itemHeight, rowHeights[currentRow]);
                        }
                    }
                }
            })

            // get sum of heights of each row
            rowHeights.forEach((height) => {
                contentHeight += height
            })
        }

        setContentStyle({
            ...style,
            padding: closeAll ? 0 : 10,
            height: contentHeight
        })

        // return
    }, [expand, style, rows, contentRef])

    const onExpandToggle = () => {
        setExpand(!expand);
    }

    return <div className={classes.ExpandableLayout}>
        {/*content*/}
        <div className={classes.content} ref={contentRef} style={contentStyle}>
            {children}
        </div>

        {/*toggle button*/}
        <div className={classes.toggleBtn} onClick={onExpandToggle}>
            <CaretUpOutlined style={{
                fontSize: 17,
                marginRight: 5,
                transform: `rotate(${expand ? 0 : "180deg"})`,
                transition: "0.8s"
            }}/>
            <div>{expand ? "Collapse" : "Expand"}</div>
        </div>
    </div>
}

export default ExpandableLayout;
