import MasterLayout from "../components/masterLayout/MasterLayout.jsx";
import LazyLoader from "../components/masterLayout/LazyLoader.jsx";
import {lazy, Suspense} from "react";
const Canceled =lazy(()=>import("../components/canceled/Canceled.jsx"))

const CanceledPage = () => {
    return (
        <MasterLayout>
            <Suspense fallback={<LazyLoader/>}>
                <Canceled/>
            </Suspense>
        </MasterLayout>
    );
};

export default CanceledPage;