import LazyLoader from "../components/masterLayout/LazyLoader.jsx";
import {Suspense,lazy} from "react";
const CreatePassword =lazy(()=>import("../components/RecoverPassword/CreatePassword.jsx"))

const ResetPasswordPage = () => {
    return (
        <div>
            <Suspense fallback={<LazyLoader/>}>
                <CreatePassword/>
            </Suspense>
        </div>
    );
};

export default ResetPasswordPage;