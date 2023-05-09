import React from 'react'
import { useLocation } from 'react-router-dom';
import "./styles.css"
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { fetchData } from '../../utils/fetchData';
import asyncComponent from '../../utils/asyncComponent';
import { useDispatch } from 'react-redux'
import { loadPage } from '../../redux/loaderSlice'


// 對於Project的generalInfo比較多的項目，不把這些說明放入json文件中，寫說明的時候很不方便：每一段都要安裝json的格式去加引號，而且加圖片非常不方便。所以這些項目的generalInfo用組件寫出來，根據需要動態引入
const DevProject12 = asyncComponent(() => import('../../components/ProjectInfo/Development/DevProject12'))
const DesProject2 = asyncComponent(() => import('../../components/ProjectInfo/Design/DesProject2'))


export default function Project() {

  const location = useLocation();
  const { id, type } = location.state;

  const [project, setProject] = useState({})
  const dispatch = useDispatch()

  useEffect(() => {
    const url = `/data/${type}-projects/${id}.json`
    fetchData(url, setProject, dispatch, loadPage)
  }, [type, id, dispatch])

  const navigate = useNavigate();
  const handleNavigate = () => {
    // navigate(`/portfolio/${type}`, { state: { id, type } });
    navigate(-1)
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

  function dynamicImportComponent(id) {
    switch (id) {
      case "dev12":
        return <DevProject12 />
      case "des2":
        return <DesProject2 />
      default:
        return "";
    }
  }
  return (
    <div className="project" style={{ ...visible }}>
      <div className="project-content">
        <div className="project-header">
          <button type="button" className="btn" onClick={handleNavigate}><i className="fa-solid fa-xmark"></i></button>
          <div className="project-thumbnail">
            {/* 圖片加載完成時，圖片的onLoad會調用handleLoad */}
            <img src={project.img} alt={project.name} onLoad={handleLoad} />
          </div>
          <h3>{project.name}</h3>
        </div>
        <div className="project-body">
          <div className="visit-web">
            <li>
              <a href={project.url} target="_blank" className="badge badge-light" rel="noreferrer"><i className="fa-solid fa-circle-arrow-right"></i>Visit {project.urlName}</a>
            </li>
            {project.subUrls ?
              project.subUrls.map((subUrl, index) => {
                return (<li>
                  <a key={index} href={subUrl.url} target="_blank" className="badge badge-light" rel="noreferrer"><i className="fa-solid fa-arrow-right"></i>Visit {subUrl.urlName}</a>
                </li>)
              })
              : ""
            }
          </div>
          <div className="description">
            <ul>
              <li><i className="fa-solid fa-globe"></i>{project.description}</li>
              <li><i className="fa-solid fa-gear"></i>Technologies used: {project.tech}</li>
            </ul>
          </div>
          <div className="general-info">
            <ul>
              {
                // 1判斷 如果項目含有generalInfo
                project.generalInfo ?
                  // 1是
                  // 2判斷 如果項目的generalInfo需要動態引入組件
                  project.generalInfo === "asyncComponent" ?
                    // 2是 動態引入組件
                    // 3根據id判斷需要動態引入哪個組件
                    dynamicImportComponent(id)
                    // 2否 不需要動態引入組件，需要遍歷json中的string array
                    :
                    project.generalInfo.map((info, index) => {
                      return <li key={index}><i className="fa-solid fa-circle-check"></i>{info}</li>
                    })
                  // 1否
                  :
                  ""}
            </ul>
          </div>
        </div>
      </div >
    </div >
  )
}
