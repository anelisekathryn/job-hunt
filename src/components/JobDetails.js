import { useParams } from "react-router-dom"
import Table from 'react-bootstrap/Table'
import './JobDetails.css';
// import { Route, Link } from "react-router-dom"
// import JobEdit from "./JobEdit.js"


const JobDetails = ({jobs}) => {

  const { id } = useParams();

  const jobInfo = jobs.find((jobInfo) => jobInfo.id === id);
  console.log(jobInfo)

  return (
    <div className="job-container">
      <div className="title">
        <h3>{jobInfo.fields.name}</h3>
      </div>
      <div className="subtitle">
      <h4>{jobInfo.fields.company}</h4>
        <p>{jobInfo.fields.status}</p>
      </div>

      <Table size="md" className="table-container">
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
            <td className="col-10">{jobInfo.fields.notes}</td>
          </tr>
        </tbody>
      </Table>

      {/* <div>
        <Link to="/edit/:id">Edit</Link>
      </div>

      <Route path="/edit/:id">
        <JobEdit
          
        />
      </Route> */}

    </div>
  )
}

export default JobDetails;