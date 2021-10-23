
import React, { Component } from 'react'


class OfferRide2 extends Component{

    constructor(props){
    super(props);
    this.nameRef = React.createRef()
    this.pickUpRef = React.createRef()
    this.destinationRef=React.createRef()
    this.carRef=React.createRef()
    this.seatsRef=React.createRef()
}
   
  componentWillMount(){
    console.log(this.nameRef)
    console.log(this.pickUpRef)
    console.log(this.destinationRef)
    console.log(this.carRef)
    console.log(this.seatsRef)
  }
  
//   let handleSubmit=(e)=>{
//       e.preventDefault();
//       let obj={
//           name:name,
//           pickUp:pickUp,
//           destination:destination,
//           car:car,
//           seatsLeft:seats
//         }
//       axios.post('http://localhost:5000/offer_ride',obj)
//         .then((response)=>{
//             console.log("Good")
//             setSuccessMessage(response.data.message)
//             setErrorMessage("");
//         })
//         .catch((error)=>{
//           if(error.response){
//             setSuccessMessage("")
//             setErrorMessage(error.response.data.message); 
//           }
//           else{
//             setSuccessMessage("")
//             setErrorMessage(error.message); }
//         })
//   }
 render(){
    
   return (<div className="container" >
       <div className="row" >
            <div className="card-header bg-primary text-light text-left col-6 offset-3"> Offer a Ride </div>    
     </div>
     <div className="row">
         <div className="card-body bg-light text-left col-6 offset-3">
          <form className="form" >    
          
            <div className="form-group">
             <label htmlFor="name">Name </label>
             <input type="text"  id="name" name="name" ref={this.nameRef} className="form-control"/>
           
            </div>
            <div className="form-group">
             <label htmlFor="pickUp">Start Location</label>
             <input type="text"  id="pickUp" name="pickUp" ref={this.pickUpRef} className="form-control"/>
             
            </div>
            <div className="form-group">
             <label htmlFor="destination">Destination</label>
             <input type="text"  id="destination" name="destination" ref={this.destinationRef} className="form-control"/>
            
            </div>
            <div className="form-group">
             <label htmlFor="car">Car</label>
             <input type="text"  id="car" name="car" ref={this.carRef} className="form-control"/>
            
            </div>
            <div className="form-group">
             <label htmlFor="seats">Seat available</label>
             <input type="number"  id="seats" name="seats" ref={this.seatsRef} className="form-control"/>
            
            </div>
            <button className="btn btn-primary" type="submit">Submit</button>
           
          </form>
         </div>
     </div>
   </div>)}
}

export default OfferRide2