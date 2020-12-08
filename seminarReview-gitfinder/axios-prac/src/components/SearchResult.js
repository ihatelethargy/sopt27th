import React from "react";
import Card from "./card/Card";
import Loading from "./loading/Loading";

const SearchResult = ({ userState }) => {
  const { user, status } = userState;

  console.log("result+", status);

  switch (status) {
    case "pendding":
      return (
        <>
          <Loading />
        </>
      );

    case "resolved":
      return (
        <>
          <Card user={user} />
        </>
      );

    case "rejected":
    default:
      return <></>;
  }
};

export default SearchResult;
