import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "../../components/button/Button";
import Card from "../../components/card/Card";
import "./MemberList.scss";
import Loading from "../../components/loading/Loading";

const MemberList = () => {
  //const [members, setMembers] = useState(null);
  const [membersState, setMembersState] = useState({
    members: null,
    status: "idle",
  });

  // useEffect에서 async바로 못 단다. 따라서 내부에 async await으로 만들어주자! 이후 즉시 실행 함수 (()=>{})()
  useEffect(() => {
    (async () => {
      setMembersState({
        members: null,
        status: "pendding",
      });
      try {
        const result = await axios.get("http://localhost/data");
        setMembersState({
          members: result.data,
          status: "resolved",
        });
      } catch (error) {
        console.log(error);
        setMembersState({
          members: null,
          status: "rejected",
        });
      }
    })();
  }, []); // 처음에 리스트만 보여줄거니까 기본으로 해도 괜찮

  switch (membersState.status) {
    case "pendding":
      return <Loading />;
    case "resolved":
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
            {membersState.members.map((member) => {
              return <Card memberData={member} />;
            })}
          </div>
        </div>
      );
    case "rejected":
    default:
      return <></>;
  }
};

export default MemberList;
