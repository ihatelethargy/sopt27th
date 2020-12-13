import React, { useEffect, useState } from "react";
import "./MemberList.scss";
import api from "../../lib/api/memberAPI";
import Card from "../../components/card/Card";
import Button from "../../components/button/Button";
import Loading from "../../components/loading/Loading";

function MemberList({ history, match }) {
  const [membersState, setMembersState] = useState({
    status: "idle",
    members: null,
  });
  // api.test();
  useEffect(() => {
    (async () => {
      // console.log(api.getMember(3));
      setMembersState({
        status: "pending",
        members: null,
      });
      try {
        const result = await api.getMemberAPI();
        setMembersState({
          status: "resolved",
          members: result,
        });
      } catch (error) {
        console.log(error);
        setMembersState({
          status: "rejected",
          members: null,
        });
      }
    })();
  }, []);

  const createCard = async () => {
    try {
      const result = await api.createMember({
        name: "POST로 새로만들었어요",
        profileUrl: "쌔유아랠",
        introduction: "하위하위",
        mbti: "tjtj",
        instagram: "mamamam",
      });
      setMembersState({
        status: "resolved",
        members: [...membersState.members, result],
      });
    } catch (error) {}
  };

  switch (membersState.status) {
    case "pending":
      return <Loading />;
    case "rejected":
      return <>로딩실패</>;
    case "idle":
      return <></>;
    case "resolved":
    default:
      return (
        <div className="member-list">
          <div className="member-list__title">파트원 소개</div>
          <div className="member-list__header member-list-header">
            <div className="member-list-header__nav">Gallery View</div>
            <div className="member-list-header__empty"></div>
            <Button text="Properties" textColor="#777"></Button>
            <Button text="Filter" textColor="#777"></Button>
            <Button text="Sort" textColor="#777"></Button>
            <Button text="Search" textColor="#777" icon="search"></Button>
            <Button text="..." textColor="#777"></Button>
          </div>
          <hr />
          <div className="member-list-content-wrapper">
            {membersState.members.map((member, i) => (
              <Card key={"card-" + i} memberData={member} />
            ))}
            <div className="create-card" onClick={createCard}>
              + New
            </div>
          </div>
        </div>
      );
  }
}

export default MemberList;
