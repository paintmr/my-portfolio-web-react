import React, { useState } from 'react'
import "./styles.css"
import aboutImg from "../../assets/img/about.jpg"
import { Link } from 'react-router-dom'

export default function About() {

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
    <section className="about-section" style={{ ...visible }}>
      <div className="row">
        <div className="section-title">
          <h2>about me</h2>
        </div>
      </div>
      <div className="row">
        <div className="about-img">
          <div className="img-box">
            {/* 圖片加載完成時，圖片的onLoad會調用handleLoad */}
            <img src={aboutImg} alt="about img" onLoad={handleLoad} />
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
