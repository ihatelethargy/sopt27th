import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "../../components/button/Button";
import Card from "../../components/card/Card";
import "./MemberList.scss";

const MemberList = (props) => {
  const [member, setMember] = useState([]);

  // useEffect에서 async바로 못 단다. 따라서 내부에 async await으로 만들어주자! 이후 즉시 실행 함수 (()=>{})()
  useEffect(() => {
    (async () => {
      const result = await axios.get(
        "http://localhost/data"
        // "https://jsonplaceholder.typicode.com/todos/1"
      );
      console.log(result);
    })();
  }, []); // 처음에 리스트만 보여줄거니까 기본으로 해도 괜찮

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
        <Card
          memberData={{
            name: "정재현",
            instagram: "jemian.js",
            introduce: "hi",
            mbti: "enfj",
          }}
        />
        <Card
          memberData={{
            name: "정재현",
            instagram: "jemian.js",
            introduce: "hi",
            mbti: "enfj",
          }}
        />
        <Card
          memberData={{
            name: "정재현",
            instagram: "jemian.js",
            introduce: "hi",
            mbti: "enfj",
          }}
        />
        <Card
          memberData={{
            name: "정재현",
            instagram: "jemian.js",
            introduce: "hi",
            mbti: "enfj",
          }}
        />
      </div>
    </div>
  );
};

export default MemberList;
