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

  const changeStatusColor = () => {
    let color;
    if (jobs.fields.status === 'Interviewing') {
      color = 'green';
    } else {
      color = 'white';
    }
    return color;
  }

  return (
    <div className="job-list">
      {jobs.map((job) => (
        <div key={job.id} className="job-list">
          <div className="job-text">
            <Link to={"/job/" + job.id} key={job.id}>
              <div className="left-text">
                <p>{job.fields.name}</p>
              </div>
            </Link>    
            <div
              className="right-text"
              style={{
                backgroundColor: {changeStatusColor}
              }}
            >
                <p>{job.fields.status}</p>
                
                {/* <DropdownButton
                  title={job.fields.status}
                  id="dropdown-menu"
                  onSelect={handleSelect}
                >
                  <Dropdown.Item eventKey="Application In Progress">Application In Progress</Dropdown.Item>
                  <Dropdown.Item eventKey="Application Submitted">Application Submitted</Dropdown.Item>
                  <Dropdown.Item eventKey="Interviewing">Interviewing</Dropdown.Item>
                  <Dropdown.Item eventKey="Final Interview">Final Interview</Dropdown.Item>
                  <Dropdown.Item eventKey="Offer Accepted">Offer Accepted</Dropdown.Item>
                  <Dropdown.Item eventKey="Archived">Archived</Dropdown.Item>
                </DropdownButton> */}

              </div>
            </div>
        </div>
      ))}


    </div>
  )
}

export default JobList;
