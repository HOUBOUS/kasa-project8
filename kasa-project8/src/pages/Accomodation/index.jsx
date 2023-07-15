import React, { useEffect, useState } from 'react'
import '../../styles/Accomodation.css'
import Navbar from '../../components/Navbar'
import Collapse from '../../components/Collapse'
import AccomodationSlider from '../../components/AccomodationSlider'
import { useParams } from 'react-router-dom'
import datas from '../../datas/datas'
import redStar from '../../assets/redStar.png'
import greyStar from '../../assets/greyStar.png'
import Footer from '../../components/Footer'

// import AccomodationSlider from '../../components/AccomodationSlider'


function Accomodation() {
   
   const[selectedAccomodation, setSelectedAccomodation] = useState([]);

   const idAccomodation = useParams ("id").id

   const datasSelectedAccomodation = datas.filter(datas => datas.id === idAccomodation)
   

   useEffect(() =>{
      const datasSelectedAccomodation = datas.filter(datas => datas.id === idAccomodation)
     
     setSelectedAccomodation(datasSelectedAccomodation[0].pictures)
   }, [idAccomodation])

   console.log("selectedAccomodation", selectedAccomodation)

   const owner = datasSelectedAccomodation[0].host.name.split(' ')
   const rating = datasSelectedAccomodation[0].rating 
   const description = datasSelectedAccomodation[0].description
   const equipements = datasSelectedAccomodation[0].equipments
  
   
  return  (
<div>


    <Navbar />
   
    <div className='accomodation_page'>
                          
      <AccomodationSlider pictures={datasSelectedAccomodation[0].pictures} numberPhotos={datasSelectedAccomodation[0].pictures.length}/>

       

      <section className='accomodation_header'>
         <div className='accomodation_title'>
               <h1>{datasSelectedAccomodation[0].title} </h1>
               <h2>{datasSelectedAccomodation[0].location}</h2>
               <span className='accomodation_tag'>
                  {datasSelectedAccomodation[0].tags.map((tag, index) => {

                     return (
                        
                        <button key={index}>{tag}</button>

               
                     )
                  })}
                
               </span>

         </div>
         <div className='accomodation_host'>
            <div className='accomodation_host_elements'>
             <span className='accomodation_host_badge'>
               <div className='accomodation_text'>
                   <h3 >{owner?.[0]} </h3>     
                   <h3>{owner?.[1]}</h3>          
               </div>
                <div className='accomodation_badge'>
                  <img src={datasSelectedAccomodation[0].host.picture} alt="hostPicture" />

                </div>
             </span>
             <div className='accomodation_rate'>
                {[...Array(5)].map((star, index) => {
                  const ratingValue = index + 1
                  return(
                     <img key={index} src={ratingValue <= rating ? redStar : greyStar} alt=" number of stars" />
                  )
                })}
               
             </div>
            </div>
         </div>

      </section>
      
      <section className='appartment_description_banner'>

         <span className='collapse_element_description'>
              <Collapse title="Description" content={description} />
         </span>
         <span className='collapse_element_equipements'>
              <Collapse title="Équipements" content={equipements} />
         </span>
        
      
      </section>
    </div>

    <Footer />

    </div> 
  )
}

export default Accomodation