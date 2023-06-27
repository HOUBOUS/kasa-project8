import React from 'react'
import '../../styles/Error.css'
import Navbar from '../../components/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'
import '../../styles/Footer.css'


function Error() {
  return (
    <div className='not_found'> 
       <Navbar />
       <main className='not_found_content'>
          <h1 className='not_found_title'>404</h1>
          <p className='not_found_text'>Oups! La page que vous demandez n'existe pas</p>

       </main>
       <Link className='not_found_link' to='/'>Retourner sur la page d'acceuil</Link>
       <Footer/>

    </div>
  )
}

export default Error