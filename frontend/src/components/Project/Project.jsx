import React from "react";
import { Link } from "react-router-dom";
import images from "../../constants/images";
import "./Project.scss";

const Project = ({ project }) => {
  const {  projectUrl } = project;
  return (
    <>
    <Link to={`${projectUrl}`} style={{ textDecoration: 'none' }}>
      <div className="projectContainer">
        {/* <div className="imageBro" style={{ backgroundImage: `url(${images[project.imgUrl]})`}}></div> */}
        <img className="imageBro" src={images[project.imgUrl]} alt='Project Image'/>
        <div className='title'>
          <h3 style={{ color: '#000000' }}>{project.title}</h3>
        </div>
      </div>
    </Link>
    </>
  );
};

export default Project;
