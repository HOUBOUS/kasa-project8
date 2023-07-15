import React from 'react'
import '../styles/Navbar.css'
import {NavLink} from "react-router-dom"


function Navbar(){
    return(
        <div className='navbar'>
            <NavLink to="/">
                <div className='navbar_logo'>
                    <img src="/Logo.png" alt="Logo" />
                </div>
            </NavLink>
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/about">
                <div>A propos</div>
            </NavLink> 

        </div>
    )
}

export default Navbar