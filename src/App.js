import './App.css';
import JobList from "./components/Jobs/Jobs.js"
import AddJob from "./components/JobAdd/JobAdd.js"
import JobDetails from "./components/JobDetails/JobDetails.js"
import JobEdit from "./components/JobEdit/JobEdit.js"
import Quotes from "./components/Quotes/Quotes.js"
import ResourceLinks from "./components/ResourceLinks/ResourceLinks.js"
import axios from "axios"
import { Route, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { slide as Menu } from "react-burger-menu"
import 'bootstrap/dist/css/bootstrap.min.css';


const API_URL = `https://api.airtable.com/v0/app3Ssx5AebBUdzmn/Table%201?view=Grid%20view&api_key=${process.env.REACT_APP_API_KEY}`


function App() {
  const [jobs, setJobs] = useState([])
  const [toggleFetch, setToggleFetch] = useState(true)
  
  useEffect(() => {
    const getJobs = async () => {
      const resp = await axios.get(API_URL);
      setJobs(resp.data.records);
    }
    getJobs();
  }, [toggleFetch])

  return (
    <div className="App">

      <nav className="desk-nav">
        <Link to="/"><img src="https://i.imgur.com/SwxKYbZ.png" alt="home"/></Link>
        <Link to="/addajob">Add a Job</Link>
      </nav>

      <nav className="mobile-nav">
      {/* CITATION: https://www.npmjs.com/package/react-burger-menu */}
        <Menu>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="addajob" className="menu-item" href="/addajob">Add a Job</a>
          <a id="archivedjobs" className="menu-item" href="/">Archived Jobs</a>
        </Menu>
      </nav>

      <Route path="/" exact>
        <div className="main-title">
          <h2>Job Hunt Status Summary</h2>
        </div>  
        <div>
            <JobList
              jobs={jobs}
            />
        </div>    
        <div className="add-button">
          <Link to="/addajob">
            Add a Job
          </Link>
        </div>
        <div className="quote-container">
          <Quotes
          />
        </div>
        <div className="resource-links">
          <ResourceLinks
          />
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
            <p>Site created by <a href="https://www.linkedin.com/in/anelisebergin/" target="_blank" rel="noreferrer">Anelise Kathryn</a></p>
            <p>See what else I'm working on: <a href="https://github.com/anelisekathryn" target="_blank" rel="noreferrer">GitHub</a></p>
            <p>Quotes provided by <a href="https://zenquotes.io/" target="_blank" rel="noreferrer">ZenQuotes API</a></p>
          </div>
        </div>
      </footer>

    </div>
  )
};

export default App;
