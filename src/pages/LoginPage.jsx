import LazyLoader from "../components/masterLayout/LazyLoader.jsx";
import {lazy, Suspense} from "react";
const Login =lazy(()=>import("../components/login/Login.jsx"))

const LoginPage = () => {
    return (
        <div>
            <Suspense fallback={<LazyLoader/>}>
                <Login/>
            </Suspense>
        </div>
    );
};

export default LoginPage;