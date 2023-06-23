import React from "react"
import '../styles/AppartmentCard.css'
import Appartment from "./Appartment"

function AppartmentCard() {
    return(
        <div className="card">
            <Appartment />
            <Appartment />
            <Appartment />
            <Appartment />
            <Appartment />
            <Appartment />
        </div>
    )
}
export default AppartmentCard