import React from 'react'
import "./styles.css"
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Header() {

  const location = useLocation();
  const { pathname } = location

  const navigate = useNavigate();


  return (
    <header className="header">
      <div className="row flex-end nav-btn-box">
        {pathname === "/navigation" ?
          <button onClick={() => navigate(-1)} className="nav-btn close" >
            <span></span>
          </button> :
          <Link to="/navigation" className="nav-btn open" >
            <span></span>
          </Link>
        }
      </div>
    </header>
  )
}

