import {useRef} from "react";
import {ErrorToast, IsEmail, IsEmpty, IsMobile} from "../../helper/FormValidationHelper.js";
import {registrationApi} from "../../APIRequests/APIRequest.js";
import {useNavigate} from "react-router-dom";




const Registration = () => {
    let emailRef,firstNameRef,lastNameRef,mobileRef,passwordRef=useRef();
    const navigate=useNavigate()

    const onRegistration= ()=>{
        let email=emailRef.value;
        let firstName=firstNameRef.value;
        let lastName=lastNameRef.value;
        let mobile=mobileRef.value;
        let password=passwordRef.value;

        if(IsEmail(email)){
            ErrorToast('Valid Email is required')
        }
        else if(IsEmpty(firstName)){
            ErrorToast('First Name is Required')
        }
        else if(IsEmpty(lastName)){
            ErrorToast('Last Name is Required')
        }
        else if(!IsMobile(mobile)){
            ErrorToast('Valid Mobile Number is Required')
        }
        else if(IsEmpty(password)){
            ErrorToast('Password is Required')
        }
        else {
             registrationApi(email,firstName,lastName,mobile,password,'',()=>navigate('/login'))
        }
    }

    return (
        <div className="container mt-md-5 mt-3">
            <div className="row  justify-content-center">
                <div className="col-md-10 col-lg-10 center-screen">
                    <div className="card animated fadeIn w-75 p-3 px-md-3">
                        <div className="card-body">
                            <h4>Sign Up</h4>
                            <hr/>
                            <div className="container-fluid m-0 p-0">
                                <div className="row m-0 p-0">
                                    <div className=" col-md-12 p-2">
                                        <label>Email Address</label>
                                        <input ref={(inp)=>emailRef=inp}  placeholder="User Email"
                                               className="form-control animated fadeInUp" type="email"/>
                                    </div>
                                    <div className=" col-md-12 p-2">
                                        <label>First Name</label>
                                        <input ref={(inp)=>firstNameRef=inp}  placeholder="First Name"
                                               className="form-control animated fadeInUp" type="text"/>
                                    </div>
                                    <div className=" col-md-12 p-2">
                                        <label>Last Name</label>
                                        <input ref={(inp)=>lastNameRef=inp}  placeholder="Last Name"
                                               className="form-control animated fadeInUp" type="text"/>
                                    </div>
                                    <div className=" col-md-12 p-2">
                                        <label>Mobile Number</label>
                                        <input ref={(inp)=>mobileRef=inp} placeholder="Mobile"
                                               className="form-control animated fadeInUp" type="mobile"/>
                                    </div>
                                    <div className=" col-md-12 p-2">
                                        <label>Password</label>
                                        <input ref={(inp)=>passwordRef=inp} placeholder="User Password"
                                               className="form-control animated fadeInUp" type="password"/>
                                    </div>

                                </div>
                                <div className="row mt-2 p-2">
                                    <div className="col-md-12 p-2">
                                        <button onClick={onRegistration}
                                                className="btn mt-3 w-100 float-end btn-primary animated fadeInUp
                                                mainBtn">Complete
                                        </button>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;