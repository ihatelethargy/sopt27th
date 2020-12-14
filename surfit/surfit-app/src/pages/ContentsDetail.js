import React, { useEffect, useState } from "react";
import Loading from "../components/loading/Loading";
import api from "../lib/api/api";
import "./ContentsDetail.scss";

const ContentsDetail = ({ match }) => {
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
          <div className="detail-title">{contentState.content.title}</div>
          <img
            src={contentState.content.contentUrl}
            alt=""
            className="detail-img"
          />
          <div className="detail-description desc">
            {contentState.content.description}
          </div>
          <div className="detail-hashtag desc">
            {contentState.content.hashtag}
          </div>
          <input
            type="text"
            value={contentState.content.comment}
            className="detail-comment"
          />
        </div>
      );
  }
};

export default ContentsDetail;
