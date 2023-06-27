import React from 'react'
import '../styles/PortfolioAccomodation.css'
import datas from '../datas/datas.js'
import Appartment from './Appartment.jsx'


function PortfolioAccomodation() {
  return (
    <main className='home_portfolio'>
        {datas.map(datas => {
            return(
                <Appartment
                   key={datas.id}
                   id={datas.id}
                   title={datas.title}
                   cover={datas.cover}
                   />
            )
                
        }
        )

        }
    </main>
  )
}

export default PortfolioAccomodation