import React from 'react'
import '../styles/GalleryAppartments.css'
import AppartmentCard from './AppartmentCard'
import datas from '../datas/datas'

function Appartments() {
  return(
    <main className='gallery_appartment'>
      {datas.map(datas => {
        return(
          <AppartmentCard
            key={datas.id}
            id={datas.id}
            title={datas.title}
            cover={datas.cover}
          
          
          />
        )
        
      })}

    </main>
  )
  
}

export default Appartments