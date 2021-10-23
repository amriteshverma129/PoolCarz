import './App.css';
import React from 'react'
import {Link,Switch,Route,BrowserRouter as Router} from 'react-router-dom';
import Login from './Components/login.js';
import Logout from './Components/logout.js';
import BookRide from './Components/bookRide.js'
import OfferRide from './Components/offerRide.js'
// import OfferRide2 from './Components/offerRide2.js'
import ShowRides from './Components/showRides.js'
import {useState} from 'react';
import TelegramIcon from '@material-ui/icons/Telegram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

function App() {
  const [isAuthenticate,setAuthenticate]=useState(false);
  const [userName,setUserName]=useState("")
  console.log(isAuthenticate);

 
  return (
    <div className="App">
     <Router>
            <React.Fragment >
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
            <span className="navbar-brand font-weight-bolder">PoolCarz</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                  <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
           
             {isAuthenticate? <ul className="navbar-nav ml-auto">
             <li className="nav-item mr-2">
               <Link className="nav-link font-weight-bold" to="/bookride"> Home </Link>
             </li>
              <li className="nav-item mr-2">
                <Link className="nav-link font-weight-bold" to="/logout"> Logout </Link>
              </li>
             </ul>
              :null}
             
           
            </div>
          </nav>
         
           <div className="container-fluid " >
             <div className="row bg-secondary">
               <div className="col-4 offset-4 text-center text-light  p-2"><h4>Friends don't let Friends ride alone </h4></div>
             </div>
             <br/>
               <div>
                 <Switch>
                 
                
                 <Route exact path="/bookride" ><BookRide userName={userName}/></Route>
                 <Route exact path="/showrides"><ShowRides userName={userName}/></Route>
                 <Route exact path="/offerride" component={OfferRide}></Route>
                 <Route exact path="/logout"><Logout  setAuthenticate={setAuthenticate}/></Route>
                 <Route  path="/" ><Login  setAuthenticate={setAuthenticate} setUserName={setUserName}/></Route>
                  
                 </Switch>
               </div>
             <div className="row bg-dark  position-fixed p-3 mb-0" style={{width:"100%",bottom:"0%"}}>
               <div className="text-light text-left col-4 pl-0">Terms & Conditions</div>
               <div className="text-light col-4">Copyright &copy; UI & Markup Team, Infosys Limited</div>
               <div className="text-light col-4 text-right">&nbsp;<TelegramIcon/>&nbsp;<TwitterIcon/>&nbsp;<FacebookIcon/></div>
             </div>
           </div>
                
               
            </React.Fragment>
          </Router>  
    </div>
  );
}

export default App;
