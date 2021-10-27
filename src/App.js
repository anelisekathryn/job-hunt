import './App.css';
import JobList from "./components/Jobs.js"
import AddJob from "./components/JobAdd.js"
import JobDetails from "./components/JobDetails.js"
import JobEdit from "./components/JobEdit.js"
import axios from "axios"
import { Route, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { slide as Menu } from "react-burger-menu"
import 'bootstrap/dist/css/bootstrap.min.css';


const API_URL = `https://api.airtable.com/v0/app3Ssx5AebBUdzmn/Table%201?view=Grid%20view&api_key=${process.env.REACT_APP_API_KEY}`

// console.log(process.env.REACT_APP_API_KEY);

function App() {
  const [jobs, setJobs] = useState([])
  const [toggleFetch, setToggleFetch] = useState(true)
  
  useEffect(() => {
    console.log('getting jobs')
    const getJobs = async () => {
      const resp = await axios.get(API_URL);
      console.log(resp.data);
      setJobs(resp.data.records);
    }
    getJobs();
  }, [toggleFetch])

  return (
    <div className="App">

      <nav className="desk-nav">
        <Link to="/">Home</Link>
        <Link to="/addajob">Add a Job</Link>
      </nav>

      {/* CITATION: https://www.npmjs.com/package/react-burger-menu */}
      <nav className="mobile-nav">
        <Menu>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="addajob" className="menu-item" href="/addajob">Add a Job</a>
        </Menu>
      </nav>

      <Route path="/" exact>
            <JobList
              jobs={jobs}
            />
        <div className="add-button">
          <Link to="/addajob">
            Add a Job
          </Link>
        </div>
      </Route>

      <Route path="/addajob">
        <AddJob
          toggleFetch={toggleFetch}
          setToggleFetch={setToggleFetch}
        />
      </Route>

      <Route path="/job/:id">
        <JobDetails
          jobs={jobs}
        />
      </Route>

      <Route path="/edit/:id">
        <JobEdit
          jobs={jobs}
          toggleFetch={toggleFetch}
          setToggleFetch={setToggleFetch}
        />
      </Route>
      
      <footer>
        <div className="footer-content">
          <div className="left-footer">
            <Link to="/">Home</Link>
            <br/>
            <Link to="/addajob">Add a Job</Link>
            <br/>
            <Link to="/">Archived Jobs</Link>
          </div>
          <div className="right-footer">
            <p>Site created by Anelise Kathryn</p>
            <p>See what else I'm working on: <a href="https://github.com/anelisekathryn" target="_blank" rel="noreferrer">GitHub</a></p>
            <p>Inspirational quotes provided by <a href="https://zenquotes.io/" target="_blank" rel="noreferrer">ZenQuotes API</a></p>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
