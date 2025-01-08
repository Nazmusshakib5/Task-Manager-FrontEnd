import MasterLayout from "../components/masterLayout/MasterLayout.jsx";
import LazyLoader from "../components/masterLayout/LazyLoader.jsx";
import {Suspense,lazy} from "react";
const Completed =lazy(()=>import("../components/completed/Completed.jsx"))

const CompletedPage = () => {
    return (
        <MasterLayout>
            <Suspense fallback={<LazyLoader/>}>
                <Completed/>
            </Suspense>
        </MasterLayout>
    );
};

export default CompletedPage;