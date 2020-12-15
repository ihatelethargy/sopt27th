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

  const onChangeContent = async (evt) => {
    const { name, value } = evt.target;
    console.log(name, value);
    try {
      await api.updateContent(contentState.content.id, {
        ...contentState.content,
        [name]: value,
      });
      setContentState({
        status: "resolved",
        content: {
          ...contentState.content,
          [name]: value,
        },
      });
    } catch (e) {}
  };

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
            name="comment"
            value={contentState.content.comment}
            className="detail-comment"
            onChange={onChangeContent}
          />
        </div>
      );
  }
};

export default ContentsDetail;
