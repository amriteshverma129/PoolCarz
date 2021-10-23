import axios from 'axios'
import React, {  useEffect, useState } from 'react';
import {Redirect} from 'react-router-dom'
import Book from './book'
function ShowRides(props) {
    const [details,setDetails]=useState([])
    const [error,setError]=useState("")
    const [rideIndex,setRideIndex]=useState("");
    const [buttonClicked,setButtonClicked]=useState(false)
    const [offerRide,setOfferRide]=useState(false)
    console.log(props)
    useEffect(()=>{
        axios.get('http://localhost:5000/show_rides')
        .then((response)=>{
             
                console.log("welcome data")
                setDetails(response.data);
        })
       .catch((error)=>{
           if(error.response)
           {
             setError(error.response.data.message)
           }
           else{
             setError(error.message)
           }
       })
       
    },[])

    if(offerRide){
      return <Redirect to='offerride'/>
    }

     return (
      <div className="container">
      <div className="row  ">
       <div className="card-header bg-primary text-left text-light col-10 offset-1">Book a Ride</div>
      </div>
      <div className="row ">
       <div className="card-body bg-light text-left  col-10 offset-1">Pool Carz is an online application which enables users to share 
       rides with others. You can either book a ride or offer a ride. Did we mention that this app is advertisement free? To add 
       on the top of that its free of cost! So what are you waiting for ? Check  out the rides available and start PCing!!</div>
      </div>
      <div className="row">
          <div className="card-body bg-light col-10 offset-1">
            <button className="btn btn-primary mb-2" type="button" onClick={()=>setButtonClicked(!buttonClicked)} >Show All Rides</button> &nbsp;
            {buttonClicked? < >
               <button className="btn btn-primary mb-2">From Infosys</button> &nbsp;
           <button className="btn btn-primary mb-2">To Infosys</button> &nbsp;
           <button className="btn btn-primary mb-2">Others</button> &nbsp;
           </>:
           !rideIndex ? <div><p className="text-primary">Please select a ride !</p>
           <table className="table table-bordered ">
            <thead className="bg-primary text-light">
             <tr>
                 <th>Starts Point</th>
                 <th>End Point</th>
                 <th>Seats Available</th>
             </tr>
            </thead>
            <tbody>
              {details && details.map((item,index)=><tr key={index} onClick={()=>setRideIndex(index)}>
                <td>{item.pickUp}</td>
                <td>{item.destination}</td>
                <td>{item.seatsLeft}</td>
              </tr>)}
            </tbody>
           </table>
           </div>:null}
           
           
        
         {rideIndex && rideIndex?
         <Book selectedRide={details[rideIndex]} ridee={props.userName}/>:null}
         <br/>
         <button className="btn btn-primary mt-4" type="button" onClick={()=>setOfferRide(true)} >Offer A Ride !</button>
           
          </div>
       
      </div>
    </div>
       
        
     )
 
}

export default ShowRides