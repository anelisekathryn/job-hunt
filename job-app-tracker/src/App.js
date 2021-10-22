import './App.css';
import JobList from "./components/Jobs.js"
import AddJob from "./components/JobAdd.js"
import JobDetails from "./components/JobDetails.js"
import axios from "axios"
import { Route, Link } from "react-router-dom"
import { useEffect, useState } from "react"

const API_URL = "https://api.airtable.com/v0/app3Ssx5AebBUdzmn/Table%201?view=Grid%20view&api_key=keyJWYfYFcw6Kszue"

function App() {
  const [jobs, setJobs] = useState([])
  
  useEffect(() => {
    console.log('getting jobs')
    const getJobs = async () => {
      const resp = await axios.get(API_URL);
      console.log(resp.data);
      setJobs(resp.data.records);
    }
    getJobs();
  }, [])

  return (
    <div className="App">

      <nav>
        <Link to="/">Home</Link>
        <Link to="/addajob">Add a Job</Link>
      </nav>

      <Route path="/" exact>
        {jobs.map((job) => (
          <div key={job.id} className="job-list">
            <JobList
              job={job}
            />
          </div>
        ))}
        <div className="add-button">
          <Link to="/addajob">
            Add a Job
          </Link>
        </div>
      </Route>

      <Route path="/addajob">
        <AddJob/>
      </Route>

      <Route path="/job/:id">
        <JobDetails
          jobs={jobs}
        />
      </Route>


    </div>
  );
}

export default App;
