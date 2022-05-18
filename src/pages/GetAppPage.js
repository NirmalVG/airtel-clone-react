import React from "react";
import AmazonFreeTrial from "../components/ui/AmazonFreeTrial";
import DownloadApp from "../components/ui/DownloadApp";
import AirtelThanksOffer from "../components/ui/AirtelThanksOffer";
import AppFeatures from "../components/ui/AppFeatures";

const GetAppPage = () => {
    return (
        <main>
            <AmazonFreeTrial />
            <AirtelThanksOffer />
            <AppFeatures />
            <DownloadApp />
        </main>
    );
};

export default GetAppPage;
