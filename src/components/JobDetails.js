import { useParams } from "react-router-dom"
import Table from 'react-bootstrap/Table'
import './JobDetails.css';
import { Link } from "react-router-dom"


const JobDetails = ({jobs}) => {

  const { id } = useParams();

  const jobInfo = jobs.find((jobInfo) => jobInfo.id === id);
  console.log(jobInfo)

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
              <td className="col-10">{jobInfo.fields.link}</td>
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
      <div>
        <Link to={`/edit/${id}`}>Edit</Link>
      </div>

    </div>
  )
}

export default JobDetails;