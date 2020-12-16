import React from "react";
import "./Header.scss";
import logo from "../../assets/icon/soundpicker.PNG";
const Header = (props) => {
  return (
    <div className="header-box">
      <img src={logo} alt="" className="header-logo" />
      <div className="header-itembox">
        <div className="header-item">
          <span>테스트 만들기</span>
        </div>
        <div className="header-item">
          <span>로그인</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
