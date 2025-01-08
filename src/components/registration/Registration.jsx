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
        let photo='data:image/jpeg;base64,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'

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
             registrationApi(email,firstName,lastName,mobile,password,photo,()=>navigate('/login'))
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