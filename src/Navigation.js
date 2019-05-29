import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div class="nav-div">
            <ul>      
                <li>
                <NavLink to="/">Home </NavLink>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </div>
    )
}

export default Navigation;

