import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks  from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks';

export default function Navbar() {
    return (
        <div>
            <div className="navbar  navbar-expand-lg navbar-light bg-dark">
                
                  <Link to="/" className="navbar-brand text-white">Dtoolz</Link>
                  <SignedOutLinks/>
                  <SignedInLinks/>
            </div>
        </div>
    )
}
