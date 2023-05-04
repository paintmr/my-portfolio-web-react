import React from 'react'
// import Header from "../Header"
import { Routes, Route } from 'react-router-dom'
import Home from "../../pages/Home"
import Portfolio from "../../pages/Portfolio"
import About from "../../pages/About"
import Project from '../Project'
import Contact from "../../pages/Contact"
import "./styles.css"


export default function Main() {

  return (
    <div className='main'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio/:type" element={<Portfolio />} />
        <Route path=":type/project/:id" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )

}
