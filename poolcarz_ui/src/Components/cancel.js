import axios from "axios";
import {useState} from 'react'

function Cancel(props){
    const [successMessage,setSuccessMessage]=useState("");
    const [errorMessage,setErrorMessage]=useState("");
    const [buttonClicked,setButtonClicked]=useState(false);
  if(buttonClicked)
  {
    axios.post('http://localhost:5000/cancel_ride', {rideId:props.rideId})
    .then((response)=>{
        setSuccessMessage(response.data.message)
        setErrorMessage("");
    })
    .catch((error)=>{
        setSuccessMessage("");
       setErrorMessage(error.message)
    })
    setButtonClicked(false)
  }

  return   (<div className="container" >
  <div className="row  ">
      <div className="card col-4 offset-4 px-0" style={{border:"1px solid skyblue"}}>
      <div className="card-header bg-primary text-left text-light ">Cancel</div>
      <div className="card-body text-left bg-light ">
          <p> Are You sure!! want to Cancel Ride</p>
      <br/>
      <button className="btn btn-danger" onClick={()=> setButtonClicked(true)} >Cancel</button>
          <span className="text-danger">{errorMessage}</span><br/>
          <span className="text-success">{successMessage}</span>
      </div>
      </div>
  </div>
</div>)
}

export default Cancel