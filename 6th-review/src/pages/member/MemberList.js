import React, { useEffect, useState } from "react";
import "./MemberList.scss";
import api from "../../lib/api/memberAPI";
import Card from "../../components/card/Card";
import Button from "../../components/button/Button";
import Loading from "../../components/loading/Loading";

function MemberList({ history, match }) {
  const [membersState, setMemberState] = useState({
    status: "idle",
    members: null,
  });

  useEffect(() => {
    (async () => {
      setMemberState({
        status: "pending",
        members: null,
      });
      try {
        const result = await api.getMemberAPI();
        setMemberState({
          status: "resolved",
          members: result,
        });
      } catch (error) {
        console.log(error);
        setMemberState({
          status: "rejected",
          members: null,
        });
      }
    })();
  }, []);

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
            {membersState.members.map((member) => (
              <Card memberData={member} />
            ))}
            <div className="create-card">+ New</div>
          </div>
        </div>
      );
  }
}

export default MemberList;
