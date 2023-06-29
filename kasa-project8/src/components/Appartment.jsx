import React from 'react'
import '../styles/Appartment.css'
import { NavLink } from 'react-router-dom'

function Appartment(props) {
  
  return (
    
    <div className='appartment'>
      <NavLink to="/accomodation">
        <img src={props.imageUrl} alt="" />
        <div className='appartment_title'>{props.title}</div>
        
      </NavLink>

    </div>
  
  )
}

export default Appartment