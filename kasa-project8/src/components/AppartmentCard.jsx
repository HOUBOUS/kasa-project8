import React from 'react'
import '../styles/AppartmentCard.css'
import Appartment from './Appartment'
import {useEffect, useState} from "react"


function AppartmentCard() {

    const[accomodations, setAccomodations] = useState([]);

    useEffect(fetchAccomodations, [])

    function fetchAccomodations(){
        fetch("datas.json")
        .then (resp => resp.json())
        .then (resp => setAccomodations(resp))
        .catch (console.error);

    }
    return(
        <div className="card">
            {accomodations.map((accomodation) => ( 
            <Appartment title={accomodation.title} imageUrl={accomodation.cover}/>
            
            
            
            ))}
            
            
        </div>
    )
}
export default AppartmentCard