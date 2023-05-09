import React, { useState } from 'react'
import "./styles.css"
import homeImage from "../../assets/img/home.jpg"
import { Link } from 'react-router-dom'

export default function Home() {

  // 解決先出現圖片邊框，再出現圖片的問題
  const [imgLoaded, setImgLoaded] = useState(false);
  // 圖片加載完成時，圖片的onLoad會調用handleLoad
  const handleLoad = () => {
    setImgLoaded(true);
  }
  // 只有在圖片加載完成時（imgLoaded為true），圖片才顯示為visible,否則為hidden
  const visible = {
    visibility: imgLoaded ? 'visible' : 'hidden'
  }

  return (
    <section className="home-section align-items-center" style={{ ...visible }}>
      <div className="row align-items-center" >
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
            {/* 圖片加載完成時，圖片的onLoad會調用handleLoad */}
            <img src={homeImage} alt="home" onLoad={handleLoad} />
          </div>
        </div>
      </div>
    </section>
  )
}
