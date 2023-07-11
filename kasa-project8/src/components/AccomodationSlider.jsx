import React from 'react'
import '../styles/AccomodationSlider.css'
import { useState } from 'react'




function AccomodationSlider({pictures}) {
  
  const [displaySlide, setDisplaySlide]= useState(0)

  const length =  pictures.length// A revoi en ajoutant index 
  
  const nextSlide = () => {
    setDisplaySlide (displaySlide === length - 1 ? 0 : displaySlide + 1)
  }//Je repart au premier slide dés qu'on est sur le dernier//

  const previousSlide = () => {
    setDisplaySlide (displaySlide === 0 ? length - 1 : displaySlide - 1)
  }


  return (
    <main className='Accomodation_slider'>
      <div className='slider'>
      {length > 1 && (       
           <i className='fa-solid fa-chevron-left' onClick={previousSlide}></i>

      )}
        { length > 1 && (

                 <i className='fa-solid fa-chevron-right' onClick={nextSlide}></i>
        )}
        
        {pictures.map((picture, index) => (

          <img key={index} 
          src={picture} 
          alt={`Slide ${index + 1}`} 
          style={{display:displaySlide === index ? 'block' : 'none'}}
          
          />
       
       ))}
                  
          
          </div>
        
    </main>
  )
}

export default AccomodationSlider