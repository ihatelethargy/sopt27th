import React, { useState } from "react";
import "./SearchInput.css";

const SearchInput = ({ onSubmit }) => {
  const [input, setInput] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    onSubmit(input);
  };

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          className="gitInput"
          type="text"
          placeholder="git 계정을 입력하세요."
          onChange={changeHandler}
          value={input}
        />
      </form>
    </>
  );
};

export default SearchInput;
