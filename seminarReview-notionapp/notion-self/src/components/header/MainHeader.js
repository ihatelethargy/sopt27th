import React from "react";
import "./MainHeader.scss";
import MenuIcon from "../../assets/icon/mdi_dehaze.svg";
import Button from "../button/Button";

const MainHeader = ({ history }) => {
  return (
    <header className="main-header">
      <img className="main-header-icon" src={MenuIcon} alt="" />
      <nav className="main-header__nav">
        <Button
          text="[ON SOPT] WEB main"
          onClickFunc={() => {
            history.push("/");
          }}
        />
        <Button
          text="파트원 소개"
          onClickFunc={() => {
            history.push("/members");
          }}
        />
      </nav>
      <div className="empty"></div>
      <div className="main-header__nav">
        <Button text="Share"></Button>
        <Button text="Updates"></Button>
        <Button text="Favorites"></Button>
        <Button text="…"></Button>
      </div>
    </header>
  );
};

export default MainHeader;
