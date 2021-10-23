import { useState } from "react"
import Cancel from './cancel.js'
import axios from 'axios'
function Book(props){
    const obj ={rider:props.selectedRide}
    obj.rider.ridee=props.ridee;
    console.log(props.ridee)
    const selectedRide =props.selectedRide
    const [book,setBook]=useState(false);
    const [data,setData]=useState(null);
    const [cancel,setCancel]=useState(false)
    const [errorMessage,setErrorMessage]=useState("")
    console.log(obj);

    if(book)
    {
      axios.post('http://localhost:5000/book_ride',obj)
      .then((response)=>{
              setData(response.data);
              console.log(response.data)
      })
     .catch((error)=>{
         if(error.response)
         {
           setErrorMessage(error.response.data.message)
         }
         else{
           setErrorMessage(error.message)
         }
     }
     )
     setBook(false)
    }
    if(cancel)
     return  <Cancel rideId={data.id}/>
    return (
        <div className="card" style={{border:"1px solid grey"}}>
             <div className="card-header bg-primary">Ride Details</div>
             <div className="card-body bg-light" >
             <table className="table table-bordered ">
            <thead className="bg-primary text-light">
             <tr>
                 <th>Name</th>
                 <th>Starts Point</th>
                 <th>End Point</th>
                 <th>Car</th>
                 <th>Seats Available</th>
             </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{selectedRide.name}</td>
                    <td>{selectedRide.pickUp}</td>
                    <td>{selectedRide.destination}</td>
                    <td>{selectedRide.car}</td>
                    <td>{selectedRide.seatsLeft}</td>
                </tr>
            </tbody>
            </table>
            {data && data?<div>Ride Booked Id is {data.id}<br/><button className="btn btn-danger" type="button" onClick={(e)=>setCancel(true)} >Cancel Ride</button></div>:<button className="btn btn-primary" type="button" onClick={()=>setBook(true)}>Book Ride !</button>}
             
             </div>
            
         </div>
    )
}

export default Book