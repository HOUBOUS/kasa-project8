import React from 'react'
import { useState } from 'react'
import '../styles/Collapse.css'



function Collapse({title, content}) {
  
    const [displayCollapse, setDisplayCollapse] = useState(false); //Je defini un state qui prend la valeur  initiale false//
    const openCollapse = () => {

      setDisplayCollapse (!displayCollapse)
    
    }

    return (
    <div className='collapse_element' onClick={openCollapse}>
        <h3 className='collapse_title'  > 

          {title} 

          <span >
             {displayCollapse ?           
                ( <i className="fa-solid fa-chevron-down"></i>)
                : (
                 <i className="fa-solid fa-chevron-up"></i>
                 )
              } 
          </span>

        </h3>
    <div className={displayCollapse? 'collapse_content' : 'collapse_content_hidden'}>
        {Array.isArray(content) ? (
        content.map((item, index) => <p key={index}>{item}</p>)

        ) : ( <p>{content}</p>

        )}
      
        
    </div>

   </div>
  
  )
}

export default Collapse