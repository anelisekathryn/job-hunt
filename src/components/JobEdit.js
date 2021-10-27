import axios from 'axios';
import {Redirect} from "react-router-dom"
import { useState } from "react"
import { useParams } from "react-router-dom"
import Form from 'react-bootstrap/Form'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

const EDIT_URL = `https://api.airtable.com/v0/app3Ssx5AebBUdzmn/Table%201?view=Grid%20view&api_key=${process.env.REACT_APP_API_KEY}`

const JobEdit = ({ jobs, toggleFetch, setToggleFetch }) => {
  
  const { id } = useParams();

  const jobInfo = jobs.find((jobInfo) => jobInfo.id === id);

  const [name, setName] = useState(jobInfo.fields.name);
  const [company, setCompany] = useState(jobInfo.fields.company);
  const [status, setStatus] = useState(jobInfo.fields.status);
  const [description, setDescription] = useState(jobInfo.fields.description);
  const [salary, setSalary] = useState(jobInfo.fields.salary);
  const [link, setLink] = useState(jobInfo.fields.link);
  const [notes, setNotes] = useState(jobInfo.fields.notes);
  // const params = useParams();
  const [redirectHome, setRedirectHome] = useState(false)
  

  const handleEdit = async (ev) => {
    ev.preventDefault(ev);
    console.log('edit submitted')

    const editJob = {
      records: [
        {
          id,
          fields: {
            name,
            company,
            status,
            description,
            salary,
            link,
            notes
          }
        }
      ]
    }

    await axios.put(EDIT_URL, editJob)
    setRedirectHome(true);
    setToggleFetch(!toggleFetch);

  }

  if (redirectHome) {
    // return <Redirect to={`/edit/rec${id}`}/>
    return <Redirect to="/"/>
  }

  const handleSelect = (e) => {
    console.log(e)
    setStatus(e)
  }

  return (
    <div>
      <form onSubmit={handleEdit} className="form-container">
        <Form.Group className="mb-3">
          <Form.Label htmlFor="name">Job Name: </Form.Label>
          <Form.Control
            type="text"
            id="name"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
          <br />
          <Form.Label htmlFor="company">Company: </Form.Label>
          <Form.Control
            type="text"
            id="company"
            value={company}
            onChange={(ev) => setCompany(ev.target.value)}
          />
          <br />
          <Form.Label htmlFor="status">Application Status: </Form.Label>
          <DropdownButton
            title={status}
            id="dropdown-menu"
            onSelect={handleSelect}
          >
            <Dropdown.Item eventKey="Application In Progress">Application In Progress</Dropdown.Item>
            <Dropdown.Item eventKey="Application Submitted">Application Submitted</Dropdown.Item>
            <Dropdown.Item eventKey="Interviewing">Interviewing</Dropdown.Item>
            <Dropdown.Item eventKey="Final Interview">Final Interview</Dropdown.Item>
            <Dropdown.Item eventKey="Offer Accepted">Offer Accepted</Dropdown.Item>
            <Dropdown.Item eventKey="Archived">Archived</Dropdown.Item>
          </DropdownButton>
          <br />
          <Form.Label htmlFor="description">Job Description: </Form.Label>
          <Form.Control
            as="textarea"
            style={{ height: '100px'}}
            type="text"
            id="description"
            value={description}
            onChange={(ev) => setDescription(ev.target.value)}
          />
          <br />
          <Form.Label htmlFor="salary">Potential Salary: </Form.Label>
          <Form.Control
            type="text"
            id="salary"
            value={salary}
            onChange={(ev) => setSalary(ev.target.value)}
          />
          <br />
          <Form.Label htmlFor="link">Job Link: </Form.Label>
          <Form.Control
            type="text"
            id="link"
            value={link}
            onChange={(ev) => setLink(ev.target.value)}
          />
          <br />
          <Form.Label htmlFor="notes">Notes: </Form.Label>
          <Form.Control
            as="textarea"
            style={{ height: '100px'}}
            type="text"
            id="notes"
            value={notes}
            onChange={(ev) => setNotes(ev.target.value)}
          />
          <br />
          <input type="submit"></input>
        </Form.Group>
      </form>
    </div>
  )
}

export default JobEdit;