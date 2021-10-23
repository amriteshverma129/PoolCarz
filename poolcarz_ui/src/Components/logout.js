import { useState } from 'react'
import {Redirect} from 'react-router-dom'
function Logout(props) {
const [buttonClicked,setButtonClicked]=useState(false)
  if(buttonClicked)
  { 
      return <Redirect to='/'/>
  }
        return (
            <div className="container">
                <div className="row  ">
                    <div className="card-header bg-primary text-left text-light col-4 offset-4">Logout</div>
                </div>
                <div className="row  ">
                    <div className="card-body text-left bg-light col-4 offset-4">Are You sure!! want to logout</div>
                </div>
                <div className="row  ">
                    <div className="card-body  bg-light col-4 offset-4">
                        <button className="btn btn-primary" onClick={()=> {setButtonClicked(true)
                        props.setAuthenticate(false)}} >Logout</button>
                    </div>

                </div>
            </div>
        )
    
}

export default Logout