import React from 'react';
import { NavLink } from 'react-router-dom';

export default function SignedInLinks() {
    return (
        <ul className="nav navbar-nav mx-auto" >
           <li className="nav-link text-white"><NavLink to='/'>Create New Project</NavLink></li>
           <li className="nav-link text-white"><NavLink to='/'>Log Out</NavLink></li>
           <li className="nav-link text-white"><NavLink to='/' className="btn btn-outline-success" >OG</NavLink></li>
        </ul>
    )
}