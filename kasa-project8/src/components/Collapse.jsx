import React from 'react'
import { useState } from 'react'


function Collapse({title, content}) {
  
    const [displayDescription, setdisplayDescription] = useState(false); //Je defini un state du toggle qui prend la valeur  initiale false//
    const display =(e) => {
        setdisplayDescription(!displayDescription);
    }

    return (
    <div className='collapse_description'>
        <div className='collapse_title'> 
          <h3> {title} </h3>
          <span onclick={display}>
               {displayDescription ? (
                 <i className="fa-solid fa-chevron-up"></i>
               ) : (
                 <i class="fa-solid fa-chevron-down"></i>
               )}

        </span>
    </div>
    <div className={displayDescription? 'collapse_content' : 'collapse_content_hidden'}>
        {Array.isArray(content) ? content.map((item, index) =>{

        return(
          <p key={index}>{item}</p>
        )

        }) : content
      }
        {/* {displayDescription && <p>{content}</p>} */}
    </div>

  </div>
  )
}

export default Collapse