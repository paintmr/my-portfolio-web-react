import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import "./styles.css"
import PortfolioItem from '../../components/PortfolioItem'
import { fetchData } from '../../utils/fetchData';
import { useDispatch } from 'react-redux'
import { loadPage } from '../../redux/loaderSlice'


export default function Portfolio() {
  const { type } = useParams();
  const [portfolio, setPortfolio] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    const url = `/data/portfolio-${type}.json`
    fetchData(url, setPortfolio, dispatch, loadPage)
  }, [dispatch, type])

  return (
    <section className={`"portfolio-section" ${portfolio.length > 0 ? "" : "hide"}`}>
      <div className="row">
        <div className="section-title">
          <h2>{type} portfolio</h2>
        </div>
      </div>
      <div className="row">
        {
          portfolio.map(item => {
            return <PortfolioItem key={item.id} item={item} type={type} />
          })
        }
      </div>
    </section>
  )
}
