import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Home from './pages/Home/Home'
import About from './pages/About'
import Accomodation from './pages/Accomodation'
import Error from './pages/Error'

ReactDOM.render(
  <React.StrictMode>
   <Router>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/accomodation"  element={<Accomodation />} />
        <Route path="*" element={<Error/>} />

    </Routes>    
   </Router>
  </React.StrictMode>,
  document.getElementById('root')

)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

