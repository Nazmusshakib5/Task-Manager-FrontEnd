import Swal from "sweetalert2";
import {updateTaskApi} from "../APIRequests/APIRequest.js";

export function UpdateToDO(id,status){
    return Swal.fire({
        title: 'Change Status',
        input: 'select',
        inputOptions: {new: 'new', completed: 'completed', progress: 'progress', canceled: 'canceled'},
        inputValue:status,
    }).then((result)=>{
        return updateTaskApi(id, result.value).then((res)=>{
            return res;
        })
    })
}