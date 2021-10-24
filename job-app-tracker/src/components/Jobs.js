import './Jobs.css';
import Table from 'react-bootstrap/Table'
import { Link } from "react-router-dom"

const JobList = ({ job }) => {

  return (
    <div className="job-list">
      {/* <Link to={"/job/" + job.id} key={job.id}>
        <h4>{job.fields.name}</h4>
        <h6>{job.fields.status}</h6>
      </Link> */}

      <Table striped bordered hover size="sm">
        <tbody>
          <tr>
          <Link to={"/job/" + job.id} key={job.id}>
            <td>{job.fields.name}</td>
            <td>{job.fields.status}</td>
          </Link>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default JobList;
