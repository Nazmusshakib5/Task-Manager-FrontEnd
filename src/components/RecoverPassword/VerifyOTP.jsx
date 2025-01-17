import  {Fragment, useState} from 'react';
import ReactCodeInput from "react-code-input";
import {ErrorToast} from "../../helper/FormValidationHelper.js";
import {RecoverVerifyOTPRequest} from "../../APIRequests/APIRequest.js";
import {getEmail} from "../../helper/SessionHelper";
import {useNavigate} from "react-router-dom";


const VerifyOTP = () => {
    let navigate=useNavigate();

    let  defaultInputStyle= {
        fontFamily: "monospace",
        MozAppearance: "textfield",
        margin: "4px",
        paddingLeft: "8px",
        width: "45px",
        borderRadius: '3px',
        height: "45px",
        fontSize: "32px",
        border: '1px solid',
        boxSizing: "border-box",
        color: "#CB0C9F",
        backgroundColor: "white",
        borderColor: "#CB0C9F",
        outline:'none'
    }


    let [OTP,SetOTP]=useState("")




    const SubmitOTP = () => {
        if(OTP.length===6){
            RecoverVerifyOTPRequest(getEmail(),OTP).then((result)=>{
                if(result===true){
                    navigate("/createPassword")
                }
            })
        }
        else {
            ErrorToast("Enter 6 Digit Code")
        }
    }

    return (
        <Fragment>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-6 center-screen">
                        <div className="card w-100  p-4">
                            <div className="card-body">
                                <h4>OTP VERIFICATION </h4>
                                <p>A 6 Digit verification code has been sent to your email address. </p>
                                <ReactCodeInput onChange={(value)=>SetOTP(value)} inputStyle={defaultInputStyle}
                                                className='customFocusInput'
                                                fields={6}/>
                                <br/>  <br/>
                                <button onClick={SubmitOTP} className="btn mainBtn w-100 animated fadeInUp float-end btn-primary">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
export default VerifyOTP;