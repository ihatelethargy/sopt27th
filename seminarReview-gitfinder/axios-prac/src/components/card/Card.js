import React from "react";
import styled from "styled-components";
import "./Card.css";

const CardWrapper = styled.div`
  background-color: #ecf0f1;
  border: 2px solid black;
  border-radius: 10px;
  width: 40%;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const Card = ({ user }) => {
  return (
    <>
      <CardWrapper>
        <img className="cardProfile" src={user.avatar_url} alt="profile-img" />
        <CardInfo>
          <span className="cardId">User : {user.login}</span>
          <span className="cardFollowers">Followers : {user.followers}</span>
          <span className="cardFollowing">Following : {user.following}</span>
        </CardInfo>
      </CardWrapper>
    </>
  );
};

export default Card;
