import React from 'react';
import { Link, NavLink } from 'react-router-dom';
//link vs Navlink: Navlink has 'active' as class while link does not have
const Navbar = () => {
    return(
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo" href="/">Pokey' Times</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/About">About</NavLink></li>
                    <li><NavLink to="/Contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;