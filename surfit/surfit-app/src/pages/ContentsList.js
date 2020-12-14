import React, { useEffect, useState } from "react";
import "./ContentsList.scss";
import Card from "../components/card/Card";
import Loading from "../components/loading/Loading";
import api from "../lib/api/api";

const ContentsList = (props) => {
  const [contentsState, setContentsState] = useState({
    status: "idle",
    contents: null,
  });

  useEffect(() => {
    // ***
    (async () => {
      try {
        setContentsState({
          status: "pendding",
          contents: null,
        });

        const result = await api.getContentsAPI();

        setContentsState({
          status: "resolved",
          contents: result,
        });
      } catch (error) {
        console.log(error);
        setContentsState({
          status: "rejected",
          contents: null,
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
              {contentsState.contents.map((item) => {
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
