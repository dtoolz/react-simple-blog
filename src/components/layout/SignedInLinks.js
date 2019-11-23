import React from 'react';
import { NavLink } from 'react-router-dom';

export default function SignedInLinks() {
    return (
        <ul className="nav navbar-nav mx-auto" >
           <li className="nav-link "><NavLink className="text-white" to='/'>Create New Project</NavLink></li>
           <li className="nav-link "><NavLink className="text-white" to='/'>Log Out</NavLink></li>
           <li className="nav-link "><NavLink to='/' className="btn btn-outline-success" >OG</NavLink></li>
        </ul>
    )
}