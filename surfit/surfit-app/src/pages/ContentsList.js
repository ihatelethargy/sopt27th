import React, { useEffect, useState } from "react";
import "./ContentsList.scss";
import Card from "../components/card/Card";
import Loading from "../components/loading/Loading";
import api from "../lib/api/api";
import SlideUp from "../components/slideup/SlideUp";

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

  const createContent = async () => {
    try {
      const result = await api.createContent({
        title: "New Contents",
        description: "새로운 컨텐츠",
        contentUrl:
          "https://www.kindpng.com/picc/m/454-4542049_ink-question-mark-zen-ish-calligraphy-hd-png.png",
        hashtag: "UX",
        icon: "",
        comment: "Leave a comment...",
      });
      setContentsState({
        status: "resolved",
        contents: [...contentsState.contents, result],
      });
    } catch (e) {
      console.log(e);
    }
  };

  const onRemove = (id) => {
    setContentsState({
      status: "resolved",
      contents: contentsState.contents.filter((content) => content.id !== id),
    });
  };

  switch (contentsState.status) {
    case "penddint":
      return <Loading />;

    case "resolved":
      return (
        <>
          <div className="contentsListWrapper">
            <div className="contentsCardWrapper">
              {contentsState.contents.map((item) => {
                return <Card cardContent={item} onRemove={onRemove} />;
              })}
              <div className="create-card" onClick={createContent}>
                <span>+ CREATE NEW CONTENTS</span>
              </div>
            </div>
          </div>
          <SlideUp />
        </>
      );

    case "rejected":
    default:
      return <>404</>;
  }
};

export default ContentsList;
