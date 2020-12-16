import React, { useEffect, useState } from "react";
import api from "../../lib/api/api";
import "./Slider.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Slider = (props) => {
  const [test, setTest] = useState({
    status: "idle",
    testContent: null,
  });

  useEffect(() => {
    (async () => {
      const result = await api.getTestAPI();
      //   console.log(result, "이건 리절트");
      try {
        setTest({
          status: "pending",
          testContent: null,
        });

        setTest({
          status: "resolved",
          testContent: result,
        });
      } catch (e) {
        setTest({
          status: "rejected",
          testContent: null,
        });
      }
    })();
  }, []);

  const TestSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };

    console.log(current);

    if (!Array.isArray(slides) || slides.length <= 0) {
      return null;
    }

    return (
      <>
        <div className="slider">
          <IoIosArrowBack className="left-arrow" onClick={prevSlide} />
          <IoIosArrowForward className="right-arrow" onClick={nextSlide} />
          {test.testContent.map((item, index) => {
            return (
              <div
                className={index === current ? "slide active" : "slide"}
                key={index}
              >
                {index === current && (
                  <div className="sliderWrapper">
                    <span className="slider-emoji">{item.emoji}</span>
                    <span className="slider-title">{item.title}</span>
                    <span className="slider-count">{item.count}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </>
    );
  };

  switch (test.status) {
    case "idle":
      return <>idle</>;
    case "pending":
      return <>Loading</>;
    case "rejceted":
      return <>404</>;
    case "resolved":
    default:
      return (
        <>
          <TestSlider slides={test.testContent} />
        </>
      );
    // <div className="slieder-wrapper">
    //   <div className="test-box">
    //     <span className="testEmoji"></span>
    //     <span className="testTitle"></span>
    //     <span className="testCount"></span>
    //   </div>
    // </div>
    //   );
  }
};

export default Slider;
