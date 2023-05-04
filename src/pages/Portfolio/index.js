import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import "./styles.css"
import PortfolioItem from '../../components/PortfolioItem'
import { fetchData } from '../../utils/fetchData';


export default function Portfolio() {
  const { type } = useParams();
  const [portfolio, setPortfolio] = useState([])
  useEffect(() => {
    const url = `/data/portfolio-${type}.json`
    fetchData(url, setPortfolio)
  }, [type])
  return (
    <section className="portfolio-section sec-padding">
      <div className="conainer">
        <div className="row">
          <div className="section-title">
            <h2>portfolio</h2>
          </div>
        </div>
        <div className="row">
          {portfolio.length > 0 ?
            portfolio.map(item => {
              return <PortfolioItem key={item.id} item={item} type={type} />
            })
            : "Loading"
          }
        </div>
      </div>
    </section>
  )
}
