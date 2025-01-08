import MasterLayout from "../components/masterLayout/MasterLayout.jsx";
import LazyLoader from "../components/masterLayout/LazyLoader.jsx";
import {Suspense} from "react";
import NotFound from "../components/notFound/NotFound.jsx";


const ErrorPage = () => {
    return (
        <MasterLayout>
            <Suspense fallback={<LazyLoader/>}>
                <NotFound/>
            </Suspense>
        </MasterLayout>
    );
};

export default ErrorPage;