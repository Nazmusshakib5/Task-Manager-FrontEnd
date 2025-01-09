import LazyLoader from "../components/masterLayout/LazyLoader.jsx";
import {Suspense,lazy} from "react";
const VerifyOTP =lazy(()=>import("../components/RecoverPassword/VerifyOTP.jsx"))

const VerifyOtpPage = () => {
    return (
        <div>
            <Suspense fallback={<LazyLoader/>}>
                <VerifyOTP/>
            </Suspense>
        </div>
    );
};

export default VerifyOtpPage;