import React from 'react'
import '../styles/Appartment.css'
import { NavLink } from 'react-router-dom'

function Appartment() {
  return (
    
    <div className='appartment'>
      <NavLink to="/accomodation">
        <div className='appartment_title'>Titre de la location</div>
        
      </NavLink>

    </div>
  
  )
}

export default Appartment