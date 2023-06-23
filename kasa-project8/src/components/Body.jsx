import React from 'react'
import '../styles/Body.css'

function Body(props) {
    const children = props.children
    
  return (

    <div className='body'>{children}</div>
  )
}

export default Body