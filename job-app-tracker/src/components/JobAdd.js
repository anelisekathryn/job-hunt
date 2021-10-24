import { useState } from "react"
import {Redirect} from "react-router-dom"
import axios from 'axios';

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
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Job Name: </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        />
        <br />
        <label htmlFor="company">Company: </label>
        <input
          type="text"
          id="company"
          value={company}
          onChange={(ev) => setCompany(ev.target.value)}
        />
        <br />
        <label htmlFor="status">Application Status: </label>
        <input
          type="text"
          id="status"
          value={status}
          onChange={(ev) => setStatus(ev.target.value)}
        />
        <br />
        <label htmlFor="description">Job Description: </label>
        <textarea
          rows="6"
          cols="50"
          type="text"
          id="description"
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
        />
        <br />
        <label htmlFor="salary">Potential Salary: </label>
        <input
          type="text"
          id="salary"
          value={salary}
          onChange={(ev) => setSalary(ev.target.value)}
        />
        <br />
        <label htmlFor="link">Job Link: </label>
        <input
          type="text"
          id="link"
          value={link}
          onChange={(ev) => setLink(ev.target.value)}
        />
        <br />
        <label htmlFor="notes">Notes: </label>
        <textarea
          rows="10"
          cols="50"
          type="text"
          id="notes"
          value={notes}
          onChange={(ev) => setNotes(ev.target.value)}
        />
        <br />
        <input type="submit"></input>
      </form>
    </div>
  )
}

export default AddJob;