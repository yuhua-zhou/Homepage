import React, {useEffect, useMemo, useRef, useState} from "react";
import {createStyles, makeStyles} from "@material-ui/core";
import {CaretUpOutlined} from "@ant-design/icons";

const useStyles = makeStyles(theme => createStyles({
    ExpandableLayout: {},
    content: {
        transition: "all 1s",
        overflow: "hidden"
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

        '&:hover': {
            background: "#fafafa",
            fontWeight: 600
        }
    }
}));

type IProps = {
    defaultExpand?: boolean,
    style?: any,
    rows: number
}

const ExpandableLayout: React.FC<IProps> = (props) => {
    const {defaultExpand, children, style, rows} = props;
    const classes = useStyles();
    const [expand, setExpand] = useState(defaultExpand);
    // content ref
    const contentRef = useRef(null);

    const contentStyle = useMemo(() => {
        return {
            ...style,
            height: expand ? 100 : 0
        }
    }, [style, expand])

    const onExpandToggle = () => {
        setExpand(!expand);
    }

    useEffect(() => {
        // // @ts-ignore
        // const children = Array.from(contentRef.current?.children);
        // children.forEach((item) => {
        //     // @ts-ignore
        //     console.log(item);
        // })

    }, [])

    return <div id={"Life"} className={classes.ExpandableLayout}>
        {/*content*/}
        <div className={classes.content} ref={contentRef} style={contentStyle}>
            {/*{children}*/}
        </div>

        {/*toggle button*/}
        <div className={classes.toggleBtn} onClick={onExpandToggle}>
            <CaretUpOutlined style={{
                fontSize: 17,
                transform: `rotate(${expand ? 0 : "180deg"})`,
                transition: "0.8s"
            }}/>
            <div style={{marginLeft: 5}}>
                {expand ? "Collapse" : "Expand"}
            </div>
        </div>
    </div>
}

export default ExpandableLayout;
