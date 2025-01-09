import {Fragment, useEffect, useState} from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import DashboardPage from "./pages/DashboardPage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import NewTaskPage from "./pages/NewTaskPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import CanceledPage from "./pages/CanceledPage.jsx";
import CompletedPage from "./pages/CompletedPage.jsx";
import ForgetPasswordPage from "./pages/ForgetPasswordPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import ProgressPage from "./pages/ProgressPage.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import FullScreenLoader from "./components/masterLayout/FullScreenLoader.jsx";
import {getToken} from "./helper/SessionHelper.js";
import VerifyOTPPage from "./pages/VerifyOTPPage.jsx";
import ResetPasswordPage from "./pages/ResetPasswordPage.jsx";


const App = () => {
    // const [token, setTokenState] = useState(getToken()); // Initialize state with current token
    //
    //
    // useEffect(() => {
    //     const handleTokenChange = () => {
    //         setTokenState(getToken()); // Update state when token changes
    //     };
    //
    //     window.addEventListener("tokenChange", handleTokenChange);
    //
    //     return () => {
    //         window.removeEventListener("tokenChange", handleTokenChange);
    //     };
    // }, []);
    if(getToken()){
        return (
            <Fragment >
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<DashboardPage/>}/>
                        <Route path='/create' element={<CreatePage/>}/>
                        <Route path='/all' element={<NewTaskPage/>}/>
                        <Route path='/progress' element={<ProgressPage/>}/>
                        <Route path='/completed' element={<CompletedPage/>}/>
                        <Route path='/canceled' element={<CanceledPage/>}/>
                        <Route path='/profile' element={<ProfilePage/>}/>
                        <Route path='*' element={<ErrorPage/>}/>
                    </Routes>
                </BrowserRouter>
                <Toaster />
                <FullScreenLoader/>
            </Fragment>
        );
    }

    else {
        return (
            <Fragment >
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Navigate to='/login' replace />}/>
                        <Route path='/login' element={<LoginPage/>}/>
                        <Route path='/registration' element={<RegistrationPage/>}/>
                        <Route path='/forgetpass' element={<ForgetPasswordPage/>}/>
                        <Route path='/verifyOTP' element={<VerifyOTPPage/>}/>
                        <Route path='/createPassword' element={<ResetPasswordPage/>}/>
                        <Route path='*' element={<ErrorPage/>}/>
                    </Routes>
                </BrowserRouter>
                <Toaster />
                <FullScreenLoader/>
            </Fragment>
        );
    }


};

export default App;
