import React, {useEffect, useState} from "react";
import CreationTopBar from "../../components/widgets/CreationTopbar/CreationTopBar";
import {NavLink} from "react-router-dom";
import PageNavigation from "../../components/widgets/PageNavigation/PageNavigation";
import {Simulate} from "react-dom/test-utils";
import load = Simulate.load;
import FileCard from "../../components/widgets/FileCard/FileCard";

const Index = ({setShowNavigation}: any) => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        //setShowNavigation(true);

        fetch("http://localhost:4000/drafts")
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            }).then(data => {
                setData(data);
            })
            .catch(error => {
                console.error("Error fetching data");
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            })

    }, []);

    if (loading) return (
        <div className="loader-wrapper">
            <div className="loader"></div>
        </div>
    );
    if (error) return <>Error!</>;

    return (
        <React.Fragment>
            <PageNavigation>
                <NavLink end to="/" className="page-navigation-item">Recently viewed</NavLink>
            </PageNavigation>
            <div className="page">
                <CreationTopBar />
                <div className="file-card-wrapper">
                    {data?.map((row: any, index: any) => {
                        return <FileCard key={index} fileName={row.fileName} lastUpdatedAt={row.meta.lastUpdatedAt} />
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Index;