import React, { useState, useEffect } from 'react'
import "./styles.css"
import { useNavigate } from 'react-router-dom';



export default function PortfolioItem(props) {
  const { type } = props
  const { id, name, img } = props.item
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/${type}/project/${id}`, { state: { id, type } });
  };

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
    <div className="portfolio-item" style={{ ...visible }}>
      <div className="portfolio-item-thumbnail">
        {/* 圖片加載完成時，圖片的onLoad會調用handleLoad */}
        <img src={img} alt="" onLoad={handleLoad} />
      </div>
      <h3 className="portfolio-item-title">{name}</h3>
      <button type="button" className="btn view-project-btn" onClick={handleNavigate}>view project</button>
    </div>
  )
}
