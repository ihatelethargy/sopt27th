import React from "react";

const SearchResult = ({ userState }) => {
  // **
  const { user, status } = userState;
  console.log("result + ", user);

  switch (status) {
    case "pendding":
      return <>Loading</>;

    case "resolved":
      return <>{user.login}</>;

    case "rejected":
    default:
      return <></>;
  }
};

export default SearchResult;
