import { useState } from "react";
import "./App.css";
import SearchInput from "./search/SearchInput";
import SearchResult from "./search/SearchResult";
import getUserAPI from "./lib/api/api";

function App() {
  const [userState, setUserState] = useState({
    user: null,
    status: "idle",
  });

  const getUser = async (username) => {
    console.log(username);
    setUserState({
      user: null,
      status: "pendding",
    });

    const data = await getUserAPI(username);
    console.log(data);
    try {
      console.log("resolved..");
      setUserState({
        user: data,
        status: "resolved",
      });
    } catch (error) {
      console.log(error);
      setUserState({
        user: null,
        status: "rejected",
      });
    }
  };

  return (
    <>
      <SearchInput onSubmit={getUser} />
      <SearchResult userState={userState} />
    </>
  );
}

export default App;
