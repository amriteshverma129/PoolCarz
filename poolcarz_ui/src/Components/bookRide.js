import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import ShowRides from './showRides.js'
class BookRide extends  Component{
   constructor(){
       super()
    this.state={
        showAllRides:false,
        offerRide:false
       }
   }
 render(){
   
     
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
                 <button className="btn btn-primary mb-5" type="button" onClick={()=>this.setState({showAllRides:true})}>Show All Rides</button>
                 {this.state.showAllRides && this.state.showAllRides? <Redirect to='/showrides'/>:null}<br/>
                 <button className="btn btn-primary" type="button" onClick={()=>this.setState({offerRide:true})}>Offer A Ride !</button>
                 {this.state.offerRide && this.state.offerRide? <Redirect to='offerride'/>:null}<br/>
                
               </div>
            
           </div>
         </div>
     )
 }
}

export default BookRide