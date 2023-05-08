import React from 'react'
import "./styles.css"
import { Link } from 'react-router-dom'


export default function Navigation() {
  return (
    <section className="nav-section">
      <ul className="nav-inner">
        <li><Link to="/" className="nav-item link-item">home</Link></li>
        <li><Link to="/portfolio/design" className="nav-item link-item">design portfolio</Link></li>
        <li><Link to="/portfolio/development" className="nav-item link-item">development portfolio</Link></li>
        <li><Link to="/about" className="nav-item link-item">about</Link></li>
        <li><Link to="/contact" className="nav-item link-item">contact</Link></li>
      </ul>
    </section>
  )
}
