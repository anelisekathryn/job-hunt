import './App.css';
import JobList from "./components/Jobs.js"
import { Route, Link } from "react-router-dom"


function App() {
  return (
    <div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/jobadd">Add a Job</Link>
      </nav>

      <Route path="/">
        <JobList />
      </Route>


    </div>
  );
}

export default App;
