

class SessionHelper{

    setToken(token){
        localStorage.setItem("token",token)

        window.dispatchEvent(new Event("tokenChange"));
    }
    getToken(){
        return localStorage.getItem("token")
    }



    setUserDetails(UserDetails){
        localStorage.setItem("UserDetails",JSON.stringify(UserDetails))
    }
    getUserDetails(){
        return JSON.parse(localStorage.getItem("UserDetails"))
    }


    setEmail(Email){
        localStorage.setItem("Email",Email)
    }
    getEmail(){
        return localStorage.getItem("Email")
    }

    setOTP(OTP){
        localStorage.setItem("OTP",OTP)
    }
    getOTP(){
        return localStorage.getItem("OTP")
    }



    removeSessions=()=>{
        localStorage.clear();
        window.location.href="/"
    }

}
export const {setEmail,getEmail,setOTP,getOTP,setToken,getToken,setUserDetails,getUserDetails,
    removeSessions,setReduxToken}=new SessionHelper();