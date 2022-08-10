import React from "react";
import { images } from "../../constants";
import CustomButton from "../CustomButton/CustomButton";
import "./About.scss";

const About = () => {
  return (
    <>
      <div className="app__about">
        <div className="textContainer">
          <div className="textCard">
            <p style={{ display: "inline" }}>I am</p>
            <p
              style={{
                display: "inline",
                color: "#01bdae",
                marginLeft: "0.5rem",
              }}
            >
              Web Developer
            </p>
            <p>and</p>
            <p style={{ display: "inline", color: "#01bdae" }}>
              Machine learning Enthusiast
              <br />
              <br />
            </p>
            <p>
              I love to solve problems and build fun projects. 🌻
              <br />
              <br />I am persuing B.Tech (CS) from Chitkara University [3rd
              Year]
            </p>
          </div>
          <div>
            <CustomButton downloadCv="true" route="/about" />
          </div>
        </div>
        <div className="skillsContainer">
          <p>Programming Languages & Libraries</p>
          <div className="skillsContainerImage">
            {[
              'cpp',
              'css',
              'git',
              'html',
              'javascript',
              'node',
              'python',
              'react',
              'redux',
              'sass',
              'numpy',
              'pandas',
              'matplotlib',
              'scikitlearn',
              'express',
              'tensorflow',
              'firebase',
              'mongodb'
            ].map((element, index) => (
              <div key={index} className="aboutSkill">
                <img className="aboutSkillItem" src={images[element]} alt="cpp" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
