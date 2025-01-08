import {Container, Row} from "react-bootstrap";
import {useRef} from "react";
import {useNavigate} from "react-router-dom";
import {ErrorToast, IsEmpty} from "../../helper/FormValidationHelper.js";
import {CreateNewTask} from "../../APIRequests/APIRequest.js";

const Create = () => {
    let taskRef,descriptionRef=useRef();
    const navigate=useNavigate()


    const OnNewTaskCreate=()=>{
        let task=taskRef.value;
        let description=descriptionRef.value;

        if(IsEmpty(task)){
            ErrorToast('Task Name is Required')
        }
        else if(IsEmpty(description)){
            ErrorToast('Description is Required')
        }
        else {
            CreateNewTask(task,description).then((res)=>{
                if(res===true){
                    navigate('/all')
                }
            })
        }
    }

    return (
        <Container fluid={true} className="content-body">
            <Row className="d-flex justify-content-center ">
                <div className="col-12 col-lg-8  col-sm-12 col-md-8  p-2 mt-4">
                    <div className="card">
                        <div className="card-body">
                            <h4 >Create New</h4>
                            <br/>
                            <input ref={(inp)=>taskRef=inp}  placeholder="Task Name" className="form-control animated fadeInUp" type="text"/>
                            <br/>
                            <textarea ref={(inp)=>descriptionRef=inp}  rows={5} placeholder="Task Description" className="form-control animated fadeInUp" type="text"/>
                            <br/>
                            <button onClick={OnNewTaskCreate} className="btn float-end btn-primary mainBtn">Create</button>
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    );
};

export default Create;