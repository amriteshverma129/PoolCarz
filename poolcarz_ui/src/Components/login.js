import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import axios from 'axios'
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          form: {
            userName: "",
            password:"",
          },
          formErrorMessage: {
            userName: "",
            password:"",
          },
          formValid: {
            userName: false,
            password:false,
            buttonActive:false
          },
          errorMessage: "",
          successMessage: "",
        };
      }
    
    handleSubmit = event => {
        event.preventDefault();
        let obj={
            userName:this.state.form.userName,
            password:this.state.form.password
        }
        axios.post('http://localhost:5000/login',obj)
        .then((response)=>{
            console.log("successful")
            this.setState({successMessage:response.data.message,errorMessage:""})
            console.log(this.state.successMessage)
            if(this.state.successMessage==='Login successful')
            {
                this.props.setAuthenticate(true); 
                this.props.setUserName(this.state.form.userName)
            }
        })
        .catch((error)=>{
          if(error.response){
              this.setState({errorMessage:error.response.data.message,successMessage:""})
          }
          else{
              this.setState({errorMessage:"there is no such userName or password",successMessage:""})
          }
        })
    }
    handleChange = event => {
        let name = event.target.name;
        let value = event.target.value;
        let  newForm={
            ...this.state.form
        }
        newForm[name]=value;
        this.setState({ form: newForm })
        this.validateField(name, value)
    };

    validateField = (fieldName, value) => {
        let formValid = this.state.formValid;
        let formError = this.state.formErrorMessage;
        switch (fieldName) {
            case "userName": if(value==="")
            {
                formValid.userName=false;
                formError.userName="field required"
            }
            else 
            {
                let pattern = new RegExp("^[A-Za-z ]{1,15}$")
                pattern.test(value) ? formValid.userName = true : formValid.userName = false;
                pattern.test(value) ? formError.userName = "" : formError.userName = "Please enter valid User Name";
               
            }
                break;
            case "password": if(value==="")
            {
                formValid.password=false;
                formError.password="field required"
            }
            else{
                let patt = new RegExp("^[A-Za-z]{1,15}$")
                patt.test(value) ? formValid.password = true : formValid.password = false;
                patt.test(value) ? formError.password = "" : formError.password = "Please enter valid password";
                
            }
               break;
            default:
                break;
        }
        formValid.buttonActive = formValid.userName && formValid.password ;
        this.setState({ formValid: formValid, formErrorMessage: formError })
    };

    render() {
        if(this.state.successMessage!=="")
        {
         return  <Redirect to="/bookride"/>
        }
        return (
            <div className="card  text-left" style={{ width: "30%", marginLeft: "35%", marginTop: "5%" }}>
                <div className="card-header bg-primary text-light" >Login</div>
                <div className="card-body form" >
                    <form onSubmit={(e) => this.handleSubmit(e)}>
                        <div className="form-group">
                            <label htmlFor="userName" className="font-weight-bold">User Name</label>
                            <input type="text" name="userName" className="form-control" id="userName" value={this.state.form.userName} onChange={(e)=>this.handleChange(e)}/>
                            <span className="text-danger">{this.state.formErrorMessage.userName} </span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="font-weight-bold">Password</label>
                            <input type="password" name="password" className="form-control" id="password" value={this.state.form.password} onChange={(e)=>this.handleChange(e)} />
                            <span className="text-danger">{this.state.formErrorMessage.password} </span>
                        </div>
                        <button type="submit" disabled={!this.state.formValid.buttonActive} className="btn btn-primary">Login</button>
                        <br/>
                        <span className="text-danger">{this.state.errorMessage}</span>
                        <span className="text-success">{this.state.successMessage}</span>
                    </form>
                </div>
            </div>
        )
    }
}