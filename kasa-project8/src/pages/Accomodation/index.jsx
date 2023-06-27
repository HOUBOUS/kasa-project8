import React from 'react'
import '../../styles/Accomodation.css'
import Navbar from '../../components/Navbar.jsx'
// import AppartmentDescription from '../../components/AccomodationDescription.jsx'
// import '../../styles/AccomodationDescription.css'
import Collapse from '../../components/Collapse'
import '../../styles/Collapse.css'


function Accomodation() {
  return (
    <div className='accomodation'>
         <Navbar />
         <div className='accomodation_img'>
        </div>

      <div className='accomodation_header'>
            <div className='accomodation_title'>
               <h1>Cozy loft on the canal Saint-Martin </h1>
               <h2>Paris, Ile-de-France </h2>
         
               <button>Cozy</button>
               <button>Canal</button>
               <button>Paris 10</button>
           
            </div>
        <div className='accomodation_host'>
             <span className='accomodation_host_badge'>
                <h3 className='accomodation_text'>Alexandre Dumas </h3>               
                <div className='accomodation_badge'></div>
             </span>
             <div className='Rate'>
                <span className='on'> ★ </span>
                <span className='on'> ★ </span>
                <span className='on'> ★ </span>
                <span className='off'> ★ </span>
                <span className='off'> ★ </span>

             </div>

         </div>

      </div>
      <Collapse />
      <span className='appartment_description_banner'>
        
      {/* <AppartmentDescription />
      <AppartmentDescription /> */}
      </span>
    </div>

  )
}

export default Accomodation