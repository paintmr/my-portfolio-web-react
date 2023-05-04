import React from 'react'
import { useLocation } from 'react-router-dom';
import "./styles.css"
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { fetchData } from '../../utils/fetchData';



export default function Project() {
  const location = useLocation();
  const { id, type } = location.state;

  const [project, setProject] = useState({})
  useEffect(() => {
    const url = `/data/${type}-projects/${id}.json`
    fetchData(url, setProject)
  }, [type, id])

  const navigate = useNavigate();
  const handleNavigate = () => {
    // navigate(`/portfolio/${type}`, { state: { id, type } });
    navigate(-1)
  };

  return (
    <div className="project">
      {project ?
        <div className="project-content">
          <div className="project-header">
            <button type="button" className="btn" onClick={handleNavigate}><i className="fa-solid fa-xmark"></i></button>
            <div className="project-thumbnail">
              <img src={project.img} alt={project.name} />
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
                    <a key={index} href={subUrl.url} target="_blank" className="badge badge-light" rel="noreferrer"><i class="fa-solid fa-arrow-right"></i>Visit {subUrl.urlName}</a>
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
                {project.generalInfo ? project.generalInfo.map((info, index) => {
                  return <li key={index}><i className="fa-solid fa-circle-check"></i>{info}</li>
                }) : "null"}
              </ul>
            </div>
          </div>
        </div >
        : "Loading"}
    </div >
  )
}
