import './TabNavigation.scss';
import {useEffect, useState} from "react";

const TabNavigation = ({children}: any) => {
    const [Tabs, setTabs] = useState([]);

    useEffect(() => {
        setTabs([]);

        children.forEach((child: any) => {
            const { props } = child;

            // @ts-ignore
            setTabs(current => [...current, props.display]);
        });
    }, []);

    return (
        <div className="page-navigation">
            <div className="page-navigation-items" style={{padding: "0px"}}>
                {Tabs.map((tab: any, index: number) => {
                    return (
                        <p key={index} className="page-navigation-item">{tab}</p>
                    )
                })}
            </div>
            {children}
        </div>
    )
}

export default TabNavigation;