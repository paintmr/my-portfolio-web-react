import React from 'react'
import "./styles.css"
import { useNavigate } from 'react-router-dom';



export default function PortfolioItem(props) {
  const { type } = props
  const { id, name, img } = props.item
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/${type}/project/${id}`, { state: { id, type } });
  };

  return (
    <div className="portfolio-item">
      <div className="portfolio-item-thumbnail">
        <img src={img} alt="" />
      </div>
      <h3 className="portfolio-item-title">{name}</h3>
      <button type="button" className="btn view-project-btn" onClick={handleNavigate}>view project</button>
    </div>
  )
}
