import React from "react";
import Header from "../components/header/Header";
import Slider from "../components/slider/Slider";
import "./Main.scss";

const Main = (props) => {
  return (
    <div className="main-wrapper">
      <Header />
      <Slider />
      <div className="card-wrapper">
          
      </div>
    </div>
  );
};

export default Main;
