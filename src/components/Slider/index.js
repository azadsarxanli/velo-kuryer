import React, { useState, useRef, useEffect } from "react";
import "./Slider.scss";
import SliderApi from "./Slider.json";

function Slider() {
  const [sliderGeneral, setSliderGeneral] = useState(SliderApi.sliders);
  // slider general length divided by 2

  const sliderRef = useRef(null);
  const singleSliderRef = useRef(null);

  const toggleHandler = (id) => {
    setSliderGeneral(
      sliderGeneral.filter((item) => {
        if (item.id === id) {
          item.isActive = !item.isActive;
        } else {
          if (item.isActive) {
            item.isActive = false;
          }
        }

        return item;
      })
    );
  };
  useEffect(() => {
    const slider = sliderRef?.current;
    const singleSlider = singleSliderRef?.current;
    const singleSliderWidth = singleSlider?.offsetWidth + 45;
    // document key press equal right arrow key then scroll to right
    document.addEventListener("keydown", (e) => {
      if (e.keyCode === 39) {
        slider.scrollLeft += singleSliderWidth * 3;
      }
      // if left arrow key then scroll to left
      if (e.keyCode === 37) {
        slider.scrollLeft -= singleSliderWidth * 3;
      }
    });
  }, []);

  return (
    <section className="slider-section">
      <h4 className="section-title">Часто задаваемые вопросы</h4>
      <div className="slider-container">
        <div ref={sliderRef} className="sliders">
          {sliderGeneral.map((item) => {
            return (
              <div
                key={item.id}
                className={`slider ${item.isActive ? "active" : ""}`}
                onClick={() => toggleHandler(item.id)}
                ref={item.id === 1 ? singleSliderRef : null}
              >
                <div className="description">
                  <div className="description-title">
                    <h5> {item.title}</h5>
                    <i>
                      <svg
                        width="7"
                        height="4"
                        viewBox="0 0 7 4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.8225 0L3.5 2.47233L6.1775 0L7 0.761134L3.5 4L0 0.761134L0.8225 0Z"
                          fill="#2F2F38"
                        />
                      </svg>
                    </i>
                  </div>
                  <div className="description-content">{item.description}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="dots">
          {sliderGeneral.slice(0, sliderGeneral.length / 3).map((item) => {
            return (
              <div
                key={item.id}
                className={`dot ${item.isActive ? "active" : ""}`}
              ></div>
            );
          })}
        </div>
      </div>
      <div className="mobile-container">
        {sliderGeneral.map((item) => (
          <div
            key={item.id}
            className={
              item.isActive ? "question-container active" : "question-container"
            }
          >
            <div
              id={item.id}
              onClick={() => toggleHandler(item.id)}
              className="question-title"
            >
              <h5>{item.title}</h5>
              <i className={item.isActive ? "active" : null}>
                <svg
                  width="12"
                  height="6"
                  viewBox="0 0 12 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.41 0L6 3.7085L10.59 0L12 1.1417L6 6L0 1.1417L1.41 0Z"
                    fill="#2F2F38"
                  />
                </svg>
              </i>
            </div>
            <div
              className={
                item.isActive ? "question-content active" : "question-content"
              }
            >
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Slider;
