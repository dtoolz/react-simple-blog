import React from 'react';
import { NavLink } from 'react-router-dom';

export default function SignedOutLinks() {
    return (
        <ul className="nav navbar-nav mx-auto" >
           <li className="nav-link "><NavLink className="text-white" to='/'>Sign Up</NavLink></li>
           <li className="nav-link "><NavLink className="text-white" to='/'>Log In</NavLink></li>
        </ul>
    )
}