import { Link } from "react-router-dom"


const Job = ({ job }) => {

  let color;
  switch (job.fields.status) {
    case 'Application In Progress':
      color = '#fee440'
      break;
    case 'Application Submitted':
      color = '#f5b700'
      break;
    case 'Interviewing':
      color = '#04e762'
      break;
    case 'Final Interview':
      color = '#dc0073'
      break;
    case 'Offer Accepted':
      color = '#00f5d4'
      break;
    case 'Archived':
      color = 'white'
      break;
    default:
      color = 'white'
  }

  return (
    <div>
      <div className="job-list">
        <Link to={"/job/" + job.id} key={job.id}>
          <div className="job-text">
            <div className="left-text">
              <p>{job.fields.name}</p>
            </div>
            <div
              className="right-text"
              style={{
                backgroundColor: color
              }}
            >
              <p>{job.fields.status}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
};

export default Job;