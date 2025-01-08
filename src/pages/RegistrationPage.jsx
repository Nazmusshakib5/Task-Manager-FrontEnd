import LazyLoader from "../components/masterLayout/LazyLoader.jsx";
import {Suspense,lazy} from "react";
const Registration =lazy(()=>import("../components/registration/Registration.jsx"))

const RegistrationPage = () => {
    return (
        <div>
            <Suspense fallback={<LazyLoader/>}>
                <Registration/>
            </Suspense>
        </div>
    );
};

export default RegistrationPage;