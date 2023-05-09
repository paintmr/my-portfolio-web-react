import React from 'react'
import "./styles.css"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
// import { useEffect } from 'react'

export default function Header() {
  const loading = useSelector((state) => state.loader.loading)

  const location = useLocation();
  const { pathname } = location

  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log('Header:' + loading)
  // }, [loading])

  return (
    <header className={`header ${loading ? 'hide' : ''}`}>
      <div className="row flex-end nav-btn-box">
        {
          // 如果URL是/navigation，說明現在打開的是navigation，右上角要顯示關閉icon
          pathname === "/navigation" ?
            <button onClick={() => navigate(-1)} className="nav-btn close" >
              <span></span>
            </button> :
            // URL不是navigation，但是URL中含有project字樣，說明現在打開的是project頁面，project自帶了關閉按鈕，所以右上角什麼都不顯示
            pathname.includes("project") ?
              ""
              :
              // URL不是navigation，且不含有project字樣，此時打開的是home/portfolio/about/contact，右上角顯示nav麵包屑按鈕
              <Link to="/navigation" className="nav-btn open" >
                <span></span>
              </Link>
        }
      </div>
    </header>
  )
}

