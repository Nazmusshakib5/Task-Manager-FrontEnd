import LazyLoader from "../components/masterLayout/LazyLoader.jsx";
import {Suspense,lazy} from "react";
const ForgetPassword =lazy(()=>import("../components/forgetPass/ForgetPassword.jsx"))

const ForgetPasswordPage = () => {
    return (
        <div>
            <Suspense fallback={<LazyLoader/>}>
                <ForgetPassword/>
            </Suspense>
        </div>
    );
};

export default ForgetPasswordPage;