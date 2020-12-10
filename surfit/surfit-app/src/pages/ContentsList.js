import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ContentsList.scss";
import Card from "../components/card/Card";
import Loading from "../components/loading/Loading";

const ContentsList = (props) => {
  const [contentsState, setContentsState] = useState({
    content: null,
    status: "idle",
  });

  useEffect(() => {
    // ***
    (async () => {
      setContentsState({
        content: null,
        status: "pendding",
      });
      try {
        const result = await axios.get("http://localhost/data");
        console.log("promise체크", result);
        setContentsState({
          content: result.data,
          status: "resolved",
        });
      } catch (error) {
        console.log(error);
        setContentsState({
          content: null,
          status: "rejected",
        });
      }
    })();
  }, []);

  switch (contentsState.status) {
    case "penddint":
      return <Loading />;

    case "resolved":
      return (
        <>
          <div className="contentsListWrapper">
            <div className="contentsCardWrapper">
              {contentsState.content.map((item) => {
                return <Card cardContent={item} />;
              })}
            </div>
          </div>
        </>
      );

    case "rejected":
    default:
      return <>404</>;
  }
};

export default ContentsList;
