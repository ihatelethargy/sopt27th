import React, { useEffect, useState } from "react";
import Longcard from "../components/longcard/LongCard";
import WideCard from "../components/widecard/WideCard";
import "./CardGroup.scss";
import api from "../lib/api/api";

const CardGroup = (props) => {
  const [idolData, setIdolData] = useState({
    status: "idle",
    idol: null,
  });

  useEffect(() => {
    (async () => {
      const result = await api.getIdolAPI();
      try {
        setIdolData({
          status: "pending",
          idol: null,
        });

        setIdolData({
          status: "resolved",
          idol: result,
        });
      } catch (e) {
        setIdolData({
          status: "rejected",
          idol: null,
        });
      }
    })();
  }, []);

  switch (idolData.status) {
    case "idle":
      return <>idle</>;
    case "pending":
      return <>Loading...</>;
    case "rejected":
      return <>404</>;
    case "resolved":
    default:
      return (
        <div className="cardgroup">
          <div className="group-intro">
            <span className="group-title">아이돌 전주 테스트</span>
            <span className="group-desc">
              좋아하는 아이돌의 노래를 전주만 듣고 맞춰보세요!
            </span>
          </div>
          <div className="group-buttons">
            <div className="group-long-buttons">
              {idolData.idol.map((item) => {
                return <Longcard idol={item} />;
              })}
            </div>
            <div className="group-wide-buttons">
              <div>
                <WideCard />
              </div>
              <div>
                <WideCard reverse/>
              </div>
            </div>
          </div>
        </div>
      );
  }
};

export default CardGroup;
