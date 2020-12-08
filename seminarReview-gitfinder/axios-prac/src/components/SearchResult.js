import React from "react";

const SearchResult = ({ userState }) => {
  const { user, status } = userState;
  console.log(user);
  switch (status) {
    case "pending":
      console.log("pending");
      return <>Loading</>;
    case "resolved":
      console.log("resolved");
      return <>{user.login}</>;
    case "rejected":
    default:
      return <></>;
  }
};

export default SearchResult;
