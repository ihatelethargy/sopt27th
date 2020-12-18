import React from "react";
import { withRouter } from "react-router-dom";
import { deleteContent } from "../../lib/api/api";
import "./Card.scss";
import DeleteOutlined from "@ant-design/icons/DeleteOutlined";

const Card = ({ cardContent, history, onRemove }) => {
  const onClickDelete = async (evt) => {
    evt.stopPropagation();
    try {
      await deleteContent(cardContent.id);
    } catch (e) {}
    onRemove(cardContent.id);
  };

  return (
    <>
      <div
        className="cardWrapper"
        onClick={() => history.push(`/contents/${cardContent.id}`)}
      >
        <img
          className="card__content__img"
          src={cardContent.contentUrl}
          alt="card-img"
        />
        <div className="card__content__text">
          <div className="card__content__title card_font">
            {cardContent.title}
          </div>
          <div className="card__content__desc card_font">
            {cardContent.description}
          </div>
          <div className="card__content__hashtag card_font">
            <span>{cardContent.hashtag}</span>
            <button className="delBtn" onClick={onClickDelete}>
              <DeleteOutlined />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(Card);
