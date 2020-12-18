import React, { useEffect, useState } from "react";
import api from "../../lib/api/api";
import PillCard from "../pillcard/PillCard";
import "./SlideUp.scss";

const SlideUp = (props) => {
  window.addEventListener("scroll", reveal);

  function reveal() {
    let reveals = document.querySelectorAll(".reveal");
    // console.log(reveals.length);
    for (let i = 0; i < reveals.length; i++) {
      let windowheight = window.innerHeight;
      //   console.log(windowheight);
      let revealtop = reveals[i].getBoundingClientRect().top; // y상대좌표
      //   console.log(revealtop);
      let revealpoint = -80;

      if (revealpoint < windowheight - revealtop) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  const [content, setContent] = useState({
    status: "idle",
    content: null,
  });

  useEffect(() => {
    (async () => {
      const data = await api.getContentAPI();
      try {
        setContent({
          status: "pending",
          content: null,
        });
        setContent({
          status: "resolved",
          content: data,
        });
      } catch (e) {
        console.log(e);
        setContent({
          status: "rejected",
          content: null,
        });
      }
    })();
  }, []);

  switch (content.status) {
    case "idle":
      return <>idle</>;
    case "pending":
      return <>loading</>;
    case "rejected":
      return <>rejected</>;
    case "resolved":
    default:
      return (
        <>
          <div className="slideUp">
            <div className="slideUpWrapper reveal">
              <section>
                <h1>이런 테스트는 어때요?</h1>
                <p>BJ추천! 금주의 HOT TEST</p>
                <div className="cardWrapper">
                  {content.content.map((item) => {
                    return (
                      <div>
                        <PillCard contentData={item} />
                      </div>
                    );
                  })}
                </div>
              </section>
            </div>
          </div>
        </>
      );
  }
};

export default SlideUp;
