import React, { useState } from "react";
import SearchInput from "./components/SearchInput";
import SearchResult from "./components/SearchResult";
import getUserAPI from "./lib/api";
import "./App.css";

const App = (props) => {
  const [userState, setUserState] = useState({
    user: null,
    status: "idle",
  });

  const getUser = async (username) => {
    console.log(username);
    setUserState({ ...userState, status: "pendding" });

    try {
      const data = await getUserAPI(username);
      setUserState({ user: data, status: "resolved" });
    } catch (error) {
      setUserState({ user: null, status: "rejected" });
      console.log(error);
    }
  };
  console.log(userState.user);

  return (
    <>
      <div className="mainWrapper">
        <SearchInput onSubmit={getUser} />
        <SearchResult userState={userState} />
      </div>
    </>
  );
};

export default App;
