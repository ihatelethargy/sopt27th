import React, { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import Loading from "../../components/loading/Loading";
import api from "../../lib/api/memberAPI";
import "./MemberDetail.scss";

const MemberDetail = ({ match }) => {
  const [memberState, setMemberState] = useState({
    // 테스트를 위해 임시로 초기값 설정!
    status: "idle",
    member: null,
  });

  useEffect(() => {
    (async () => {
      const data = await api.getMember(match.params.id);
      try {
        setMemberState({
          status: "pending",
          member: null,
        });
        // console.log(data, "결과좀");
        setMemberState({
          status: "resolved",
          member: data,
        });
      } catch (e) {
        setMemberState({
          status: "rejected",
          member: null,
        });
      }
    })();
  }, [match.params.id]);

  const onChangeInputs = async (evt) => {
    const { name, value } = evt.target;
    try {
      await api.updateMember(match.params.id, {
        ...memberState.member,
        [name]: value,
      });
      setMemberState({
        status: "resolved",
        member: {
          ...memberState.member,
          [name]: value,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  switch (memberState.status) {
    case "pending":
      return <Loading />;
    case "rejected":
      return <>fail 404</>;
    case "idle":
      return <>idle</>;
    case "resolved":
    default:
      // return checkFunc();
      return (
        <div className="member-detail">
          <div className="member-detail__button-area">
            <Button text="Add icon"></Button>
            <Button text="Add cover"></Button>
          </div>
          <input
            className="member-detail__content name"
            name="name"
            value={memberState.member.name}
            onChange={onChangeInputs}
          />
          <hr style={{ borderTop: "solid 1px #eee", marginBottom: "24px" }} />
          <div className="member-detail__content">
            <div className="content-title">&nbsp; 인스타 아이디</div>
            <input
              className="content-input"
              name="instagram"
              value={memberState.member.instagram}
              onChange={onChangeInputs}
            />
          </div>
          <div className="member-detail__content">
            <div className="content-title">&nbsp; 한 줄 소개</div>
            <input
              className="content-input"
              name="introduction"
              value={memberState.member.introduction}
              onChange={onChangeInputs}
            />
          </div>
          <div className="member-detail__content">
            <div className="content-title">&nbsp; mbti</div>
            <input
              className="content-input"
              name="mbti"
              value={memberState.member.mbti}
              onChange={onChangeInputs}
            />
          </div>
          <div className="member-detail__content">
            {memberState.member.profileUrl !== "" ? (
              <img
                className="content-image"
                src={memberState.member.profileUrl}
                alt={"profile url"}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      );
  }
};

export default MemberDetail;
