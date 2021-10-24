import { useState } from "react"
import {Redirect} from "react-router-dom"
import axios from 'axios';
import './JobAdd.css';
import Form from 'react-bootstrap/Form'

const API_URL = "https://api.airtable.com/v0/app3Ssx5AebBUdzmn/Table%201?api_key=keyJWYfYFcw6Kszue"

const AddJob = ({toggleFetch, setToggleFetch}) => {

  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [status, setStatus] = useState('');
  const [description, setDescription] = useState('');
  const [salary, setSalary] = useState('');
  const [link, setLink] = useState('');
  const [notes, setNotes] = useState('');
  const [redirectHome, setRedirectHome] = useState(false)

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    console.log('submitted')

    const newJob = {
      records: [
        {
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
    await axios.post(API_URL, newJob);
    setRedirectHome(true);
    setToggleFetch(!toggleFetch);
  }

  if (redirectHome) {
    return <Redirect to="/" />
  }

  return (
    <div>
      <h4>Add a new job to track</h4>
      <form onSubmit={handleSubmit} className="form-container">
        <Form.Group className="mb-3" controlId="formBasicEmail">
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
          <Form.Control
            type="text"
            id="status"
            value={status}
            onChange={(ev) => setStatus(ev.target.value)}
          />
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

export default AddJob;