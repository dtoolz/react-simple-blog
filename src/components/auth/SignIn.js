import React, { Component } from 'react';

export default class SignIn extends Component {
    //initial state
    state={
      email:'',
      password:''
    }
    //when a user type on an input field
    handleChange = (e) => {
        this.setState({
         [e.target.id]: e.target.value //target value of id password or email
        })
    }
    //when form is submitted
    handleSubmit = (e) => {
       e.preventDefault(); //prevent default submit action
       console.log(this.state);
    }
    render(){
        return(
            <div className="container">
               <form onSubmit={this.handleSubmit} className="bg-white">
                   <h5 className="text-secondary my-3">Sign In</h5>

                   <div className="input-group mb-3">
                     <div className="input-group-prepend">
                         <span className="input-group-text">Email</span>
                     </div>
                     <input type="text" id="email" className="form-control" placeholder="email" 
                     onChange={this.handleChange} />
                   </div>

                   <div className="input-group mb-3">
                     <div className="input-group-prepend">
                         <span className="input-group-text">Password</span>
                     </div>
                     <input type="text" id="password" className="form-control" placeholder="password"
                      onChange={this.handleChange} />
                   </div>

                   <div className="input-group">
                     <button className="btn btn-success btn-md" >Login</button>
                   </div>
               </form>
            </div>
        )
    }
}



