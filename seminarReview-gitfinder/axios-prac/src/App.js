import React, { useState } from "react";
import SearchInput from "./components/SearchInput";
import SearchResult from "./components/SearchResult";
import getUserAPI from "./lib/api";

const App = (props) => {
  const [userState, setUserState] = useState({
    user: null,
    status: "idle",
  });

  const getUser = (username) => {
    console.log(username);
    setUserState({ ...userState, status: "pendding" });

    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <SearchInput onSubmit={getUser} />
      <SearchResult />
    </>
  );
};

export default App;
