import React, { Component } from 'react';

export default class CreateProject extends Component {
    //initial state of project
    state={
      title:'',
      content:''
    }
    //when a user type on an input field
    handleChange = (e) => {
        this.setState({
         [e.target.id]: e.target.value //target value of title or content
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
                   <h5 className="text-secondary my-3">Create a Project</h5>

                   <div className="input-group mb-3">
                     <div className="input-group-prepend">
                         <span className="input-group-text">Project Title</span>
                     </div>
                     <input type="text" id="title" className="form-control" placeholder="title" 
                     onChange={this.handleChange} />
                   </div>

                   <div className="input-group mb-3">
                     <div className="input-group-prepend">
                         <span className="input-group-text">Project Content</span>
                     </div>
                     <textarea  id="content" cols="30" rows="5" className="form-control" 
                     onChange={this.handleChange}></textarea>
                   </div>

                   <div className="input-group">
                     <button className="btn btn-success btn-md" >Create Project</button>
                   </div>
               </form>
            </div>
        )
    }
}
