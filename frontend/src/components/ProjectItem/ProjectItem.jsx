import React from "react";
import { useParams } from "react-router-dom";
import { images } from "../../constants";
import CustomButton from "../CustomButton/CustomButton";
import projects from "../Projects/projectData";
import "./ProjectItem.scss";

const ProjectItem = () => {
  const params = useParams();
  const projectIndex = params.id;
  const project = projects[projectIndex-1];
  const { watchLiveUrl, githubUrl } = project;

  return (
    <div className="projectItemContainer">
      <p className="head-text titleBro">{project.title}</p>
      <div className="mainContainerItem">
        <div className="imageContainerItem">
          <img src={images[project.imgUrl]} alt="" />
        </div>
        <div>
          <div className="description app__flex">{project.description}</div>
          <div className="app__flex">
            {githubUrl && (
              <CustomButton
                text="Watch Live"
                downloadCv={false}
                githubLink={true}
                githubUrl={githubUrl}
              />
            )}
            {watchLiveUrl && (
              <CustomButton
                text="Github Link"
                downloadCv={false}
                projectLink={true}
                projectUrl={watchLiveUrl}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
