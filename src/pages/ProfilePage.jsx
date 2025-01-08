import MasterLayout from "../components/masterLayout/MasterLayout.jsx";
import LazyLoader from "../components/masterLayout/LazyLoader.jsx";
import {lazy, Suspense} from "react";
const Profile =lazy(()=>import("../components/profile/Profile.jsx"))

const ProfilePage = () => {
    return (
        <MasterLayout>
            <Suspense fallback={<LazyLoader/>}>
                <Profile/>
            </Suspense>
        </MasterLayout>
    );
};

export default ProfilePage;