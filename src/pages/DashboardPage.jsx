import MasterLayout from "../components/masterLayout/MasterLayout.jsx";
import {Suspense,lazy} from "react";
import LazyLoader from "../components/masterLayout/LazyLoader.jsx";
const Dashboard =lazy(()=>import("../components/dashboard/Dashboard.jsx"))

const DashboardPage = () => {
    return (
        <MasterLayout>
            <Suspense fallback={<LazyLoader/>}>
            <Dashboard/>
            </Suspense>
        </MasterLayout>
    );
};

export default DashboardPage;