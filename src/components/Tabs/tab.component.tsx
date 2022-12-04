import React from "react";
import { Tabs } from 'antd';

// styles and images
import './tab.styles.scss';
import { TabProps, TabContent } from "../../models";

const Tab: React.FC<TabContent> = ({tabs}) => {
    return (
        <Tabs
        centered
        defaultActiveKey="1"
        items={tabs.map((tab: TabProps, index: number) => {
            return {
                label: tab.name,
                key: String(index),
                children: (tab.content)
            }
        })}
        />
    )
}

export default Tab;