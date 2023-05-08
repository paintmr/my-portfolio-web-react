import React, { useState } from 'react'
import "./styles.css"
import homeImage from "../../assets/img/home.jpg"
import { Link } from 'react-router-dom'

export default function Home() {
  // 解決先出現圖片邊框，再出現圖片的問題
  const [loaded, setLoaded] = useState(false);
  // 圖片加載完成時，onLoad會調用handleLoad
  const handleLoad = () => {
    setLoaded(true);
  }
  // 只有在圖片加載完成時（loaded為true），.img-box（含有圖片邊框）才顯示為block，否則胃none
  const imageStyle = {
    display: loaded ? 'block' : 'none'
  }

  return (
    <section className="home-section align-items-center">
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
          <div className="img-box" style={{ ...imageStyle }}>
            {/* 圖片加載完成時，onLoad會調用handleLoad */}
            <img src={homeImage} alt="home" onLoad={handleLoad} />
          </div>
        </div>
      </div>
    </section>
  )
}
