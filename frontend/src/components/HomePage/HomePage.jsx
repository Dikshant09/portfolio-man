import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="container">     
      <div className="nameLine">
        <h2>Hi, I'm <span className="name">Dikshant</span> </h2>
        <h2>Welcome to my portfolio</h2> 
      </div>
      
      <div className="button">
        <CustomButton route='/about' text={'Know More'}/>
      </div>
    </div>
  );
};

export default HomePage;