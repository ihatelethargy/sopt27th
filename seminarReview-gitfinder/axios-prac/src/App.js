import React, { useState } from "react";
import SearchInput from "./components/SearchInput";
import SearchResult from "./components/SearchResult";
import getUserAPI from "./lib/api";

const App = (props) => {
  const [userState, setUserState] = useState({
    user: null,
    status: "idle",
  });

  const getUser = async (username) => {
    setUserState({ ...userState, status: "pending" }); // ... 이부분 이해하기

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
      <SearchInput onSubmit={getUser} />
      <SearchResult userState={userState} />
    </>
  );
};

export default App;
