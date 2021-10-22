import './Jobs.css';
import {Link} from "react-router-dom"

const JobList = ({ job }) => {

  return (
    <div className="job-list">
      <Link to={"/job/" + job.id} key={job.id}>
        <h4>{job.fields.name}</h4>
        <h6>{job.fields.status}</h6>
      </Link>
    </div>
  )
}

export default JobList;
