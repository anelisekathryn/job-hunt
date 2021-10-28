import './Jobs.css'
import Job from './Job.js'


const JobList = ({ jobs }) => {
  return (
    <div className="job-list">
      {jobs.map((job, idx) => (
        <Job
          key={idx}
          job={job}
        />
      ))}
    </div>
  )
};

export default JobList;
