import axios from "axios";
import {ErrorToast, SuccessToast} from "../helper/FormValidationHelper.js";
import store from "../redux/store/store.js";
import {HideLoader, ShowLoader} from "../redux/state-slice/settingSlice.js";
import {getToken, setEmail, setOTP, setToken, setUserDetails} from "../helper/SessionHelper.js";
import {SetCanceledTask, SetCompletedTask, SetNewTask, SetProgressTask} from "../redux/state-slice/taskSlice.js";
import {SetSummaryValue} from "../redux/state-slice/dashboardSummarySlice.js";
import {SetProfile} from "../redux/state-slice/profileSlice.js";


const AxiosHeader={headers:{'token':getToken()}}

const baseUrl='https://task-manager-api-jet.vercel.app/api/v1';


export function DashboardTotalTask(){
    store.dispatch(ShowLoader())
    let URL=baseUrl+'/dashboardTaskStatus';
    axios.get(URL,AxiosHeader).then((res)=>{
        store.dispatch(HideLoader())
        if(res.data.data['status']==='success'){
            store.dispatch(SetSummaryValue(res.data.data['data']))
        }
        else{
            store.dispatch(HideLoader())
            ErrorToast("Something Went Wrong")
        }
    }).catch((err)=>{
        ErrorToast("Something Error Occured")
        store.dispatch(HideLoader())
    });
}



export function TaskListByStatus(Status){
    store.dispatch(ShowLoader())
    let URL=baseUrl+"/listByStatus/"+Status;
    axios.get(URL,AxiosHeader).then((res)=>{
        store.dispatch(HideLoader())
        if(res.data.data['status']==='success'){
            if(Status==="new"){
                store.dispatch(SetNewTask(res.data['data']))
            }
            else if(Status==="completed"){
                store.dispatch(SetCompletedTask(res.data['data']))
            }
            else if(Status==="canceled"){
                store.dispatch(SetCanceledTask(res.data['data']))
            }
            else if(Status==="progress"){
                store.dispatch(SetProgressTask(res.data['data']))
            }
        }
        else{
            store.dispatch(HideLoader())
            ErrorToast("Something Went Wrong")
        }
    }).catch((err)=>{
        ErrorToast("Something Error Occured")
        store.dispatch(HideLoader())
    });
}


export function CreateNewTask(task,description){
    store.dispatch(ShowLoader())
    let url=baseUrl+'/createTask'
    let postBody={
        title:task,
        description:description,
        status:'new'
    }
    return axios.post(url,postBody,AxiosHeader)
        .then((res)=>{
            store.dispatch(HideLoader())
            if(res.data.data.status==='success'){
                SuccessToast('New task Created')
                return true
            }
            else {
                ErrorToast('NewTask not Created')
                return false
            }
        })
        .catch((err)=>{
            store.dispatch(HideLoader())
            ErrorToast('Error')
            return false
        })
}


export function loginApi(email,password){
    store.dispatch(ShowLoader())
    let url=baseUrl+'/login'
    let postBody={
        email:email,
        password:password
    }
    return axios.post(url,postBody)
        .then((res)=>{
            store.dispatch(HideLoader())
            if(res.data.status==='success'){
                setToken(res.data['token'])
                setUserDetails(res.data['userData'][0])
                return true
            }
            else {
                ErrorToast('Incorrect Email or Password')
                return false
            }
        })
        .catch((err)=>{
            store.dispatch(HideLoader())
            ErrorToast('Error')
            return false
        })
}


export function registrationApi(email,firstName,lastName,mobile,password,photo,onSuccess){

    store.dispatch(ShowLoader())
    let postBody={
        email:email,
        firstName:firstName,
        lastName:lastName,
        mobile:mobile,
        password:password,
        photo:photo
    }
    let url=baseUrl+"/createUser"
    axios.post(url,postBody)
        .then((res)=>{
            store.dispatch(HideLoader())
            if(res.data.data['status']==='fail'){
                ErrorToast('Email Already exists')
            }
            else {
                SuccessToast('Registration Complete')
                if(onSuccess){
                    onSuccess()
                }
            }

        })
        .catch((e)=>{
            store.dispatch(HideLoader())
            ErrorToast('Error Has Occured')
            return false
        })
}


export function deleteTaskApi(id){
    store.dispatch(ShowLoader())
    let url=baseUrl+`/deleteTask/${id}`

    return axios.get(url,AxiosHeader)
        .then((res)=>{
            store.dispatch(HideLoader())
            return res.data.data['status'] === 'success';

        })
        .catch((e)=>{
            store.dispatch(HideLoader())
            ErrorToast('Error Has Occured')
            return false
        })

}


export function updateTaskApi(id,status){
    store.dispatch(ShowLoader())
    let url=baseUrl+`/updateTask/${id}`

    let postBody={
        status:status
    }

    return axios.post(url,postBody,AxiosHeader)
        .then((res)=>{
            store.dispatch(HideLoader())
            return res.data.data['status'] === 'success';

        })
        .catch((e)=>{
            store.dispatch(HideLoader())
            ErrorToast('Error Has Occured')
            return false
        })
}


export function GetProfileDetails(){
    store.dispatch(ShowLoader())
    let URL=baseUrl+"/profileDetails";
    axios.get(URL,AxiosHeader).then((res)=>{
        store.dispatch(HideLoader())
        if(res.data.data['status'] === 'success'){
            store.dispatch(SetProfile(res.data.data['data'][0]))
        }
        else{
            ErrorToast("Profile Not Found")
        }
    }).catch((err)=>{
        ErrorToast("Something Error Occured")
        store.dispatch(HideLoader())
    });
}

export function ProfileUpdateRequest(email,firstName,lastName,mobile,password,photo){

    store.dispatch(ShowLoader())

    let URL=baseUrl+"/updateProfile";

    let PostBody={email:email,firstName:firstName,lastName:lastName,mobile:mobile,password:password,photo:photo}
    let UserDetails={email:email,firstName:firstName,lastName:lastName,mobile:mobile,photo:photo}

    return axios.post(URL,PostBody,AxiosHeader).then((res)=>{
        store.dispatch(HideLoader())
        if(res.data.data['status'] === 'success'){

            SuccessToast("Profile Update Success")
            setUserDetails(UserDetails)

            return true;
        }
        else{
            ErrorToast("Profile Update Failed")
            return  false;
        }
    }).catch((err)=>{
        ErrorToast("Something Error Occured")
        store.dispatch(HideLoader())
        return false;
    });
}


export function RecoverVerifyEmailRequest(email){
    store.dispatch(ShowLoader())
    let URL=baseUrl+"/recoverVerifyEmail/"+email;
    return axios.get(URL).then((res)=>{
        store.dispatch(HideLoader())
        if(res.data.data['status'] ==='failed'){
                ErrorToast("No user found");
                return false;
        }
        else{
            setEmail(email)
            SuccessToast("A 6 Digit verification code has been sent to your email address. ");
            return true;
        }
    })
        .catch((err)=>{
        ErrorToast("Error Occured")
            console.log(err)
        store.dispatch(HideLoader())
        return false;
    });
}


export function RecoverVerifyOTPRequest(email,OTP){
    store.dispatch(ShowLoader())
    let URL=baseUrl+"/recoverVerifyOTP/"+email+"/"+OTP;
    return axios.get(URL).then((res)=>{
        store.dispatch(HideLoader())
        if(res.data.data['status'] ==='failed'){
                ErrorToast("Verification failed");
                return false;
        }
        else{
            setOTP(OTP)
            SuccessToast("Code Verification Success");
            return true;
        }
    }).catch((err)=>{
        ErrorToast("Error Occured")
        store.dispatch(HideLoader())
        return false;
    });
}

// Recover Password Step 03 Reset Pass
export function RecoverResetPassRequest(email,OTP,password){
    store.dispatch(ShowLoader())
    let URL=baseUrl+"/recoverResetPass";
    let PostBody={email:email,otp:OTP,password:password}

    return axios.post(URL,PostBody).then((res)=>{
        store.dispatch(HideLoader())
        if(res.data.data['status'] ==='failed'){
                ErrorToast("New Password Creation failed");
                return false;
        }
        else{
            setOTP(OTP)
            SuccessToast("New Password Created");
            return true;
        }
    }).catch((err)=>{
        ErrorToast("Error Occured")
        store.dispatch(HideLoader())
        return false;
    });
}