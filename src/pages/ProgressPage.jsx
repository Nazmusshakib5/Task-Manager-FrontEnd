import MasterLayout from "../components/masterLayout/MasterLayout.jsx";
import LazyLoader from "../components/masterLayout/LazyLoader.jsx";
import {Suspense,lazy} from "react";
const Progress =lazy(()=>import("../components/progress/Progress.jsx"))

const  ProgressPage= () => {
    return (
        <MasterLayout>
            <Suspense fallback={<LazyLoader/>}>
                <Progress/>
            </Suspense>
        </MasterLayout>
    );
};

export default ProgressPage;