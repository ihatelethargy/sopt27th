import React from "react";
import "./Searchbar.scss";
import { GoSearch } from "react-icons/go";

const Searchbar = (props) => {
  return (
    <div className="inputWrapper">
      <input
        type="text"
        className="searchInput"
        placeholder="테스트를 검색하세요"
      />
      <span clanssName="searchIcon">
        <GoSearch />
      </span>
    </div>
  );
};
export default Searchbar;
