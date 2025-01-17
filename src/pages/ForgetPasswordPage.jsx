import LazyLoader from "../components/masterLayout/LazyLoader.jsx";
import {Suspense,lazy} from "react";
const SendOTP =lazy(()=>import("../components/RecoverPassword/SendOTP.jsx"))

const ForgetPasswordPage = () => {
    return (
        <div>
            <Suspense fallback={<LazyLoader/>}>
                <SendOTP/>
            </Suspense>
        </div>
    );
};

export default ForgetPasswordPage;