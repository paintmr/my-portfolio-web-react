import React from 'react'
import "./styles.css"
import aboutImg from "../../assets/img/about.jpg"
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <section className="about-section">
      <div className="row">
        <div className="section-title">
          <h2>about me</h2>
        </div>
      </div>
      <div className="row">
        <div className="about-img">
          <div className="img-box">
            <img src={aboutImg} alt="about img" />
          </div>
          <a href="Qianlan-Hu-Resume.pdf" className="btn" target="_blank">resume</a>
          <Link to="/contact" className="btn link-item">contact me</Link>
        </div>
        <div className="about-text">
          <h2>skills</h2>
          <ul>
            <li><i className="fa-sharp fa-solid fa-object-group"></i>UX design, UI design, Figma, Adobe XD, Photoshop</li>
            <li><i className="fa-solid fa-code"></i>HTML, CSS, Sass, Less, Bootstrap, WordPress</li>
            <li><i className="fa-brands fa-node-js bold"></i>JavaScript, jQuery, Object-Oriented Programming, TypeScript</li>
            <li><i className="fa-brands fa-react bold"></i>React, Redux, Hooks</li>
            <li><i className="fa-solid fa-rss"></i>Ajax, HTTP Protocol, Axios</li>
            <li><i className="fa-solid fa-server"></i>Webpack, Npm, Node, Express, MySQL</li>
            <li><i className="fa-brands fa-git-square"></i>Git, GitHub</li>
            <li><i className="fa-brands fa-wordpress"></i>WrodPress</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
