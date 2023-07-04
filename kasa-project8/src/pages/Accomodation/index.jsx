import React, { useEffect, useState } from 'react'
import '../../styles/Accomodation.css'
import Navbar from '../../components/Navbar.jsx'
import Collapse from '../../components/Collapse'
import '../../styles/Collapse.css'
import ImageAccomodation from '../../components/GalleryAppartments'
import { useParams } from 'react-router-dom'
import datas from '../../datas/datas'
import redStar from '../../assets/redStar.png'
import greyStar from '../../assets/greyStar.png'
import Footer from '../../components/Footer'

function Accomodation() {
   
   const[selectedAccomodation, setSelectedAccomodation] = useState(null);
   const idAccomodation = useParams ('id').id
   const datasSelectedAccomodation = datas.filter(datas => datas.id ===idAccomodation)
   

   useEffect(() =>{
     const datasSelectedAccomodation = datas.filter(datas => datas.id ===idAccomodation)
     setSelectedAccomodation(datasSelectedAccomodation[0].pictures)
   }, [idAccomodation]);

   const owner = datasSelectedAccomodation[0].host.name.split(' ')
   const rating = datasSelectedAccomodation[0].rating 
   const description = datasSelectedAccomodation[0].description
   const equipements = datasSelectedAccomodation[0].equipments
  
  return  (
<div>
   
    <div className='accomodation'>
      

         <Navbar />
         <div className='accomodation_img'>

            <ImageAccomodation imageUrl={selectedAccomodation.pictures} />
            
        </div>

      <section className='accomodation_header'>
            <div className='accomodation_title'>
               <h1>{datasSelectedAccomodation[0].title} </h1>
               <h2>{datasSelectedAccomodation[0].location}</h2>
               <span>
                  {datasSelectedAccomodation[0].tags.map((tag, index) => {

                     return (
                        
                        <button key={index}>{tag}</button>

               
                     )
                  })}
                
               </span>

            </div>
        <div className='accomodation_host'>
             <span className='accomodation_host_badge'>
               <div className='accomodation_text'>
                   <h3 >{owner[0]} </h3>     
                   <h3>{owner[1]}</h3>          
               </div>
                <div className='accomodation_badge'>
                  <img src={datasSelectedAccomodation[0].host.picture} alt="hostPicture" />

                </div>
             </span>
             <div className='Rate'>
                {[...Array(5)].map((star, index) => {
                  const ratingValue = index + 1
                  return(
                     <img key={index} src={ratingValue <= rating ? redStar : greyStar} alt=" number of stars" />
                  )
                })}
               
             </div>

         </div>

      </section>
      
      <section className='appartment_description_banner'>

         <span className='collapse_elements'>
              <Collapse title={description} content={description} />
         </span>
         <span className='collapse_elements'>
              <Collapse title={equipements} content={equipements} />
         </span>
        
      
      </section>
    </div>

    <Footer />

    </div> 
  )
}

export default Accomodation