import {useParams} from "react-router-dom"


const JobDetails = ({jobs}) => {

  const { id } = useParams();

  const jobInfo = jobs.find((jobInfo) => jobInfo.id === id);
  console.log(jobInfo)

  return (
    <div>
      <h3>{jobInfo.fields.name}</h3>
      <h4>{jobInfo.fields.company}</h4>
      <p>{jobInfo.fields.status}</p>
      <h4>Description:</h4>
      <p>{jobInfo.fields.description}</p>
      <h4>Potential Salary:</h4>
      <p>{jobInfo.fields.salary}</p>
      <h4>Application Link:</h4>
      <p>{jobInfo.fields.link}</p>
      <h4>Additional Notes:</h4>
      <p>{jobInfo.fields.notes}</p>
    </div>
  )
}

export default JobDetails;