import {Fragment, useRef} from "react";
import {Link} from "react-router-dom";
import {loginApi} from "../../APIRequests/APIRequest.js";
import {ErrorToast, IsEmail, IsEmpty} from "../../helper/FormValidationHelper.js";

const Login = () => {
    let emailRef,passwordRef=useRef();


    const onLogin=()=>{
        let email=emailRef.value;
        let password=passwordRef.value;

        if(IsEmail(email)){
            ErrorToast('Valid Email Required')
        }
        else if(IsEmpty(password)){
            ErrorToast('Valid Password Required')
        }
        else {
            loginApi(email,password).then((res)=>{
                if(res===true){
                    window.location.href="/"
                }
            })
        }
    }

    return (
        <Fragment>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-6 center-screen">
                        <div className="card w-100  p-4">
                            <div className="card-body">
                                <h4>SIGN IN</h4>
                                <br/>
                                <input ref={(inp)=>emailRef=inp}  placeholder="User Email" className="form-control animated fadeInUp customFocus" type="email"/>
                                <br/>
                                <input ref={(inp)=>passwordRef=inp}  placeholder="User Password" className="form-control animated fadeInUp customFocus " type="password"/>
                                <br/>
                                <button onClick={onLogin} className="btn w-100 animated fadeInUp float-end btn-primary mainBtn">Next</button>
                                <hr/>
                                <div className="mt-4 d-flex w-100 justify-content-center">

                                    <div>
                                        <Link className="text-center ms-3 h6 animated fadeInUp" to="/registration">Sign Up </Link>
                                        <span className="ms-1">|</span>
                                        <Link className="text-center ms-3 h6 animated fadeInUp" to="/forgetpass">Forget Password</Link>
                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Login;