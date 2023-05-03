import React, { Component } from 'react'
// import Header from "../Header"
import { Routes, Route } from 'react-router-dom'
import Home from "../Home"
import Portfolio from "../Portfolio"
import About from "../About"
import "./styles.css"


export default class Main extends Component {
  render() {
    return (
      <div className='main'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio/:type" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    )
  }
}
