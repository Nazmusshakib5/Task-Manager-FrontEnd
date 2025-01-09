import {useSelector} from "react-redux";
import {useEffect} from "react";
import {DashboardTotalTask} from "../../APIRequests/APIRequest.js";

const Dashboard = () => {

    useEffect(() => {
        DashboardTotalTask()
    }, []);

    const totalDashboardTask=useSelector((state)=>state.summary.total)

     return ( <div className='container'>
          <div className='row'>
              {
                 totalDashboardTask && totalDashboardTask.map((item,i)=> {
                      return <div key={i} className='col-md-3 col-12 col-lg-3 col-sm-6 px-2'>
                          <div className='card h-100 border-0 shadow-sm'>
                              <div className='card-body'>
                                  <h5 className='animated fadeInUp'>{item['taskName']}</h5>
                                  <h5 className='text-secondary animated fadeInUp'>{item['count']}</h5>
                              </div>
                          </div>
                      </div>
                  })
              }
          </div>
        </div>
    );
};

export default Dashboard;