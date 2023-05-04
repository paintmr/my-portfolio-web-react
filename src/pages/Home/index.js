import React from 'react'
import "./styles.css"
import homeImage from "../../assets/img/home.jpg"
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="home-section align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="home-text">
            <p>Hello, I'm</p>
            <h1>Qianlan</h1>
            <h2>web designer & developer</h2>
            <Link to="/portfolio/design" className="btn link-item">design portfolio</Link>
            <Link to="/portfolio/development" className="btn link-item">development portfolio</Link>
            <Link to="/about" className="btn link-item">more about me</Link>
          </div>
          <div className="home-img">
            <div className="img-box">
              <img src={homeImage} alt="home" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
