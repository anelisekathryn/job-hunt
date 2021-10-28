import './Jobs.css';
import Job from './Job.js'
// import { Link } from "react-router-dom"


const JobList = ({ jobs }) => {


  return (
    <div className="job-list">
      {jobs.map((job) => (
        // insert job component here with job={job} lines 44–60
        <Job
          job={job}
        />
        // <div key={job.id} className="job-list">
        //   <Link to={"/job/" + job.id} key={job.id}>
        //   <div className="job-text">
        //       <div className="left-text">
        //         <p>{job.fields.name}</p>
        //       </div>   
        //     <div
        //       className="right-text"
        //     >
        //         <p>{job.fields.status}</p>
        //       </div>
        //   </div>
        //   </Link>
        // </div>
      ))}


    </div>
  )
}

export default JobList;
