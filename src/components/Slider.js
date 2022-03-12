import React from "react";

function Slider() {
  return (
    <section className="slider-section">
      <h4 className="section-title">Часто задаваемые вопросы</h4>
      <div className="slider-container">
        <div className="sliders">
          <div className="slider active">
            <div className="description">
              <div className="description-title">
                <p> Leo eu donec nibh morbi magna tellus?</p>
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
              <div className="description-content">
                Sit tellus enim donec quis placerat scelerisque nibh nulla
                tortor. Dis pulvinar velit elementum semper lobortis. Odio quam
                cursus cursus sit elementum. Orci viverra congue interdum ac
                ipsum venenatis, amet amet non. Enim egestas.
              </div>
            </div>
          </div>
          <div className="slider">
            <div className="description">
              <div className="description-title">
                <p> Leo eu donec nibh morbi magna tellus?</p>
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
            </div>
          </div>
          <div className="slider">
            <div className="description">
              <div className="description-title">
                <p> Leo eu donec nibh morbi magna tellus?</p>
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
            </div>
          </div>
        </div>
        <div className="dots">
          <div className="dot active"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </section>
  );
}

export default Slider;
