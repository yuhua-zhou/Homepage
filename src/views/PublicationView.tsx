import React, {useMemo, useState} from "react";
import {createStyles, makeStyles} from "@material-ui/core";
import Title from "../components/Title";
import PublicationItem from "../components/PublicationItem";

import {getListKey} from "../utils/utils";

import {Divider, Tabs} from "antd";
import {useGlobalState} from "../store/useData";

const {TabPane} = Tabs;

const useStyles = makeStyles(theme => createStyles({
    PublicationView: {},
    publicationList: {}
}));

const PublicationView = () => {
    const classes = useStyles();
    const [selectedKey, setSelectedKey] = useState(0);
    const categories = ["All", "System", "Visualization", "HCI", "Computer Vision", "Nature Language Process"];
    const {publicationsList} = useGlobalState();
    const selectedPublications = useMemo(() => {
        return publicationsList.filter((item: any) => {
            return selectedKey === 0
                || item["categories"]?.includes(categories[selectedKey]);
        })
    }, [publicationsList, selectedKey]);

    const onChange = (key: any) => {
        setSelectedKey(parseInt(key));
    }

    return <div id={"Publications"} className={classes.PublicationView}>
        <Title title={"Publications"} subTitle={"my research direction"}/>
        <Tabs defaultValue={0} onChange={onChange}
              size={"middle"}
              tabBarGutter={5}
              type="card">
            {categories.map((item, i) => {
                return <TabPane tab={item} key={i}/>
            })}
        </Tabs>
        <div className={classes.publicationList}>
            {selectedPublications.map((item) => {
                return <PublicationItem
                    key={getListKey(item)} {...item}/>
            })}
        </div>
        <Divider/>
    </div>
}

export default PublicationView;
