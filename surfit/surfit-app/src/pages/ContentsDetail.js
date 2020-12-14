import React, { useEffect, useState } from "react";
import Loading from "../components/loading/Loading";
import api from "../lib/api/api";

const ContentsDetail = ({ match, history }) => {
  const [contentState, setContentState] = useState({
    status: "idle",
    content: null,
  });

  useEffect(() => {
    (async () => {
      setContentState({
        status: "pending",
        content: null,
      });
      try {
        const result = await api.getContentAPI(match.params.id);
        setContentState({
          status: "resolved",
          content: result,
        });
      } catch (e) {
        console.log(e);
        setContentState({
          status: "rejected",
          content: null,
        });
      }
    })();
  }, [match.params.id]);

  switch (contentState.status) {
    case "idle":
      return <>idle</>;
    case "pending":
      return <Loading />;
    case "rejected":
      return <>404</>;
    case "resolved":
    default:
      return (
        <div className="detail-wrapper">
          <img
            src={contentState.content.contentUrl}
            alt=""
            className="detail-img"
          />
          <div className="detail-title">{contentState.content.title}</div>
          <div className="detail-description">
            {contentState.content.description}
          </div>
          <div className="detail-hashtag">{contentState.content.hashtag}</div>
        </div>
      );
  }
};

export default ContentsDetail;
