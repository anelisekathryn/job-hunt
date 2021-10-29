import { useParams } from "react-router-dom"
import Table from 'react-bootstrap/Table'
import './JobDetails.css';
import { Link } from "react-router-dom"


const JobDetails = ({jobs}) => {

  const { id } = useParams();

  const jobInfo = jobs.find((jobInfo) => jobInfo.id === id);

  let color;
  switch (jobInfo.fields.status) {
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
    <div className="job-container">
      <div className="title">
        <h3>{jobInfo.fields.name}</h3>
      </div>
      <div className="subtitle">
        <h4>{jobInfo.fields.company}</h4>
        <p className="detail-status" style={{ backgroundColor: color }} >{jobInfo.fields.status}</p>
      </div>

      <div className="edit-button">
        <Link to={`/edit/${id}`}>
          <img src="https://i.imgur.com/5eNqsk7.png" alt="edit"/>
        </Link>
      </div>


      <div className="table-container">
        <Table size="md">
          <tbody>
            <tr>
              <th className="col-2">Description: </th>
              <td className="col-10">{jobInfo.fields.description}</td>
            </tr>
            <tr>
              <th className="col-2">Salary: </th>
              <td className="col-10">{jobInfo.fields.salary}</td>
            </tr>
            <tr>
              <th className="col-2">Job Link: </th>
              <td className="col-10"><a href={jobInfo.fields.link} target="_blank" rel="noreferrer">{jobInfo.fields.link}</a></td>
            </tr>
            <tr>
              <th className="col-2">Notes: </th>
              <td className="col-10">
                {jobInfo.fields.notes.split("\n").map((textLine) => (
                  <p className="notes-text" key={textLine}>
                    {textLine}
                  </p>
                ))}
              </td>
            </tr>
          </tbody>
        </Table>
      </div>

      <div className="mobile-container">
        <h5>Description:</h5>
        <p>{jobInfo.fields.description}</p>
        <h5>Salary:</h5>
        <p>{jobInfo.fields.salary}</p>
        <h5>Job Link:</h5>
        <p><a href={jobInfo.fields.link} target="_blank" rel="noreferrer">{jobInfo.fields.link}</a></p>
        <h5>Notes:</h5>
        {jobInfo.fields.notes.split("\n").map((textLine) => (
          <p className="notes-text" key={textLine}>
            {textLine}
          </p>
        ))}
      </div>

    </div>
  )
}

export default JobDetails;