import React from "react";

const SearchResult = ({ userState }) => {
  const { user, status } = userState;

  console.log("result+", status);

  switch (status) {
    case "pendding":
      return <>Loadding...</>;

    case "resolved":
      return <>{user.login}</>;

    case "rejected":
    default:
      return <></>;
  }
};

export default SearchResult;
