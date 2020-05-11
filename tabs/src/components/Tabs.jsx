import React, { useState } from 'react';

import styles from './Tabs.module.css';

const tabs = [
    {
        label: 'Tab 1',
        content: 'This is the content for tab 1'
    },
    {
        label: 'Tab 2',
        content: 'This is the content for tab 2'
    },
    {
        label: 'Tab 3',
        content: 'This is the content for tab 3'
    }
];

function Tabs() {
    const [currentTab, setCurrentTab] = useState(0);

    function handleClick(idx) {
        setCurrentTab(idx);
    };

    return (
        <div>
            <div className={styles.tabContainer}>
                {tabs.map( (tab, i) => {
                    let style;
                    i === currentTab ?
                        style = "current" :
                        style = "notCurrent";
                    
                    return (
                        <div className={styles[style]} key={i} onClick={ () => handleClick(i) }>{tab.label}</div>
                    )
                })}
            </div>
            <div className={styles.contentBox}>{tabs[currentTab].content}</div>
        </div>
    );
}

export default Tabs;