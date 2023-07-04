import React from 'react'
import '../styles/AppartmentCard.css'
// import Appartment from './Appartment'
// // // import {useEffect, useState} from "react"
// import datas from '../datas/datas'
import { Link } from 'react-router-dom'

function AppartmentCard({id, title, cover}) {

    
     return(
      <Link to={`/accomodation/${id}`} className='appartment_card'>
        <img src={cover} alt="cover" />
        <h3 className='appartment_card_title'>{title}</h3>
      </Link>
    
     )
}console.log("AppartmentCard", AppartmentCard)
export default AppartmentCard