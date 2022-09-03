import React from 'react'
import Header from '../common/header/Header'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../home/Home'
import Footer from '../common/footer/Footer'
import About from '../about/About'
import Contact from '../contact/Contact'
import Services from '../Services/Services'
import Pricing from '../pricing/Pricing'
import Blog from '../blog/Blog'

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
