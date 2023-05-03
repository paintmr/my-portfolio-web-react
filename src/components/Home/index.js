import React, { Component } from 'react'
import "./styles.css"
import homeImage from "../../assets/img/home.jpg"
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <section class="home-section align-items-center" id="home">
        <div class="container">
          <div class="row align-items-center">
            <div class="home-text">
              <p>Hello, I'm</p>
              <h1>Qianlan</h1>
              <h2>web designer & developer</h2>
              <Link to="/portfolio/design" class="btn link-item">design portfolio</Link>
              <Link to="/portfolio/dev" class="btn link-item">development portfolio</Link>
              <Link to="/about" class="btn link-item">more about me</Link>
            </div>
            <div class="home-img">
              <div class="img-box">
                <img src={homeImage} alt="home" />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
