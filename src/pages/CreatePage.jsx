import MasterLayout from "../components/masterLayout/MasterLayout.jsx";
import LazyLoader from "../components/masterLayout/LazyLoader.jsx";
import {lazy, Suspense} from "react";
const Create =lazy(()=>import("../components/create/Create.jsx"))

const CreatePage = () => {
    return (
        <MasterLayout>
            <Suspense fallback={<LazyLoader/>}>
                <Create/>
            </Suspense>
        </MasterLayout>
    );
};

export default CreatePage;