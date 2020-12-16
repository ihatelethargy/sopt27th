import React from "react";
import Header from "../components/header/Header";
import Searchbar from "../components/searchbar/Searchbar";
import Slider from "../components/slider/Slider";
import CardGroup from "./CardGroup";
import "./Main.scss";

const Main = (props) => {
  return (
    <div className="main-wrapper">
      <Header />
      <Slider />
      <Searchbar />
      <div className="card-wrapper">
        <CardGroup />
      </div>
    </div>
  );
};

export default Main;
