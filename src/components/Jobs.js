import './Jobs.css';
import { Link } from "react-router-dom"
// import { useState } from "react"
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Dropdown from 'react-bootstrap/Dropdown'


const JobList = ({ jobs }) => {

  // const [status, setStatus] = useState('');

  // const handleSelect = (e) => {
  //   console.log(e)
  //   setStatus(e)
  // }

  // let color;

  // switch (job.fields.status) {
  //   case 'Application In Progress':
  //     color = 'yellow'
  //     break;
  //   case 'Application Submitted':
  //     color = 'pink'
  //     break;
  //   case 'Interviewing':
  //     color = 'red'
  //     break;
  //   case 'Final Interview':
  //     color = 'blue'
  //     break;
  //   case 'Offer Accepted':
  //     color = 'green'
  //     break;
  //   case 'Archived':
  //     color = 'grey'
  //     break;
  // }

  return (
    <div className="job-list">
      {jobs.map((job) => (
        // insert job component here with job={job} lines 44–60
        <div key={job.id} className="job-list">
          <Link to={"/job/" + job.id} key={job.id}>
          <div className="job-text">
              <div className="left-text">
                <p>{job.fields.name}</p>
              </div>   
            <div
              className="right-text"
              // style={{
              //   backgroundColor: color
              // }}
            >
                <p>{job.fields.status}</p>
              </div>
          </div>
          </Link>
        </div>
      ))}


    </div>
  )
}

export default JobList;
