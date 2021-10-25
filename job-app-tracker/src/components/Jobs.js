import './Jobs.css';
// import Table from 'react-bootstrap/Table'
// import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from "react-router-dom"

const JobList = ({ jobs }) => {

  return (
    <div className="job-list">

      {/* <Link to={"/job/" + job.id} key={job.id}>
        <h4>{job.fields.name}</h4>
        <h6>{job.fields.status}</h6>
      </Link> */}

      {/* <Table striped bordered hover size="md">
        <tbody>
          <tr>
          {jobs.map((job) => (
            <div key={job.id} className="job-list">
            <Link to={"/job/" + job.id} key={job.id}>
              <td>{job.fields.name}</td>
              <td>{job.fields.status}</td>
              </Link>
            </div>
            ))}
          </tr>
        </tbody>
      </Table>

      <ListGroup>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          {jobs.map((job) => (
            <div key={job.id} className="job-list">
            <Link to={"/job/" + job.id} key={job.id}>
              <div className="fw-bold">{job.fields.name}</div>
              <div className="fw-bold">{job.fields.status}</div>
            </Link>
            </div>
            ))}

          <div className="fw-bold">Subheading</div>

        </ListGroup.Item>
      </ListGroup> */}

      {jobs.map((job) => (
        <div key={job.id} className="job-list">
          <Link to={"/job/" + job.id} key={job.id}>
            <div className="job-text">
              <div className="left-text">
                <p>{job.fields.name}</p>
              </div>
              <div className="right-text">
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
