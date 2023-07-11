import React from 'react'
import '../styles/AppartmentCard.css'
import { NavLink } from 'react-router-dom'


function AppartmentCard({id, title, cover}) {

    
     return(
      <NavLink to={`/accomodation/${id}`} className='appartment_card'>
        <img src={cover} alt="cover" />
        <h3 className='appartment_card_title'>{title}</h3>
      </NavLink>
    
     )
}console.log("AppartmentCard", AppartmentCard)
export default AppartmentCard