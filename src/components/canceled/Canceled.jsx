import {Fragment, useEffect} from "react";
import {Container} from "react-bootstrap";
import {AiOutlineEdit,AiOutlineCalendar,AiOutlineDelete} from "react-icons/ai";
import {TaskListByStatus} from "../../APIRequests/APIRequest.js";
import {useSelector} from "react-redux";
import {DeleteToDO} from "../../helper/TaskDeleteAlert.js";
import {ErrorToast, SuccessToast} from "../../helper/FormValidationHelper.js";
import {UpdateToDO} from "../../helper/TaskUpdateAlert.js";

const Canceled = () => {

    useEffect(() => {
        TaskListByStatus('canceled')
    }, []);

    const CanceledList = useSelector((state) => state.task.Canceled)

    const deleteTask=(id)=>{
        DeleteToDO(id)
            .then((res)=>{
                if(res===true){
                    SuccessToast('Successfully Deleted The Task')
                    TaskListByStatus('canceled')
                }
                else {
                    ErrorToast('Task is not Deleted')
                }
            })
    }

    const updateTask=(id,status)=>{
        UpdateToDO(id,status)
            .then((res)=>{
                if(res===true){
                    SuccessToast('Successfully Updated The Task')
                    TaskListByStatus('canceled')
                }
                else {
                    ErrorToast('Task is not Updated')
                }
            })
    }

    return (
        <Fragment>
            <Container fluid={true} className="content-body">
                <div className="row p-0 m-0">
                    <div className="col-12 col-md-6 col-lg-8 px-3">
                        <h5>Task Canceled</h5>
                    </div>
                    <div className="col-12 float-end col-md-6 col-lg-4 px-2">
                        <div className="row">
                            <div className="col-8">
                                <input className="form-control w-100"/>
                            </div>
                            <div className="col-4">
                                <button className="btn btn-primary w-100 mainBtn">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row p-0 m-0">
                    {
                        CanceledList.data && CanceledList.data.map((item,i)=> {
                            const date=item['createdDate'].toString().split('T')[0]
                            return <div key={i} className="col-12 col-lg-4 col-sm-6 col-md-4 mt-4 p-2">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h6 className="animated fadeInUp">{item['title']}</h6>
                                        <p className="animated fadeInUp">{item['description']}</p>
                                        <p className="m-0 animated fadeInUp p-0">
                                            <AiOutlineCalendar/> {date}
                                            <a onClick={updateTask.bind(this,item['_id'],item['status'])} className="icon-nav text-primary mx-1"><AiOutlineEdit/></a>
                                            <a onClick={deleteTask.bind(this,item['_id'])} className="icon-nav text-danger mx-1"><AiOutlineDelete/></a>
                                            <a className="badge float-end bg-danger">{item['status']}</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        })

                    }

                </div>
            </Container>
        </Fragment>
    );
};

export default Canceled;