import React from 'react';
import { NavLink } from 'react-router-dom';

export default function SignedOutLinks() {
    return (
        <ul className="nav navbar-nav mx-auto" >
           <li className="nav-link text-white"><NavLink to='/'>Sign Up</NavLink></li>
           <li className="nav-link text-white"><NavLink to='/'>Log In</NavLink></li>
        </ul>
    )
}