import React from 'react'
import Navbar from '../../components/Navbar'
import '../../styles/About.css'
import Footer from '../../components/Footer'
import Collapse from '../../components/Collapse'
import aboutDatas from '../../datas/aboutDatas'

function About() {
  return (
    <div>
        <Navbar />
        <div className='about_cover_img'>
           
        </div>
        <main className='about_details'>
          {aboutDatas.map (aboutdata => {

             return(
                 <div key={aboutdata.id} className='about_collapse'>
                  <Collapse   title={aboutdata.title} content={aboutdata.content}/>
                 </div>

             )

          }
            
            
            )}
       
        </main>
        <Footer/>
        
        
    </div>
  )
}

export default About