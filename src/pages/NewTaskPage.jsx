import MasterLayout from "../components/masterLayout/MasterLayout.jsx";
import LazyLoader from "../components/masterLayout/LazyLoader.jsx";
import {lazy, Suspense} from "react";
const NewTask =lazy(()=>import("../components/newTask/NewTask.jsx"))

const NewTaskPage = () => {
    return (
        <MasterLayout>
            <Suspense fallback={<LazyLoader/>}>
                <NewTask/>
            </Suspense>
        </MasterLayout>
    );
};

export default NewTaskPage;