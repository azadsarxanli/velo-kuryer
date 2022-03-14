import { useRef, useState, useEffect } from "react";
import mapImage from "../../assets/images/map-first.png";
import Btns from "../Header/Btns.json";

import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Map.scss";

function Map() {
  gsap.registerPlugin(ScrollTrigger);
  const mapRef = useRef();

  useEffect(() => {
    gsap.from(".map-config", 1, {
      xPercent: -100,
      opacity: 0,
      delay: 0.6,
      ease: Power3,

      scrollTrigger: {
        trigger: mapRef.current,
        markers: true,
        start: "70px bottom",
      },
    });
    gsap.from(".map-container", 1, {
      xPercent: 100,
      opacity: 0,
      delay: 0.6,
      ease: Power3,
      scrollTrigger: {
        trigger: mapRef.current,
        markers: true,
        start: "70px bottom",
      },
    });
  }, []);

  const [hourBtns, setHourBtns] = useState(Btns.hour);
  const hourRef = useRef();

  const btnOnclickHandler = (event) => {
    setHourBtns(
      hourBtns.filter((btn, index) => {
        btn.isActive = false;
        if (event.target.className === `active-${index}`) {
          hourRef.current.className = `secret active-${index}`;
          hourRef.current.textContent = btn.text;
        }
        return btn;
      })
    );
  };
  const [buttons, setButtons] = useState(Btns.location);
  const [images, setImages] = useState(Btns.images);
  const [selected, setSelected] = useState(Btns.images[0]);
  const [toggleHour, settoggleHour] = useState(Btns.hour);
  const imgRef = useRef();
  const buttonHandler = (id, event) => {
    setSelected(
      images.find((image) => {
        return id === image.id;
      })
    );
    setButtons(
      buttons.filter((item, index) => {
        if (event.target.className === `active-${index}`) {
          imgRef.current.className = `secret active-${index}`;
          imgRef.current.textContent = item.text;
        }
        return item;
      })
    );
  };
  return (
    <section className="map-section" ref={mapRef}>
      <aside className="map-config">
        <h4>Зоны доставки</h4>
        <p>
          Venenatis convallis tempus, mi posuere accumsan, enim elit vitae,
          cras. Enim nibh morbi cras eu libero.
        </p>
        <div className="locations">
          {buttons.map((btn, index) => (
            <button
              className={`active-${index}`}
              onClick={(event) => buttonHandler(btn.id, event)}
              key={btn.id}
            >
              {btn.text}
            </button>
          ))}
          <div ref={imgRef} className="secret active-0">
            зона А
          </div>
        </div>
        <div className="hour">
          {hourBtns.map((btn, index) => (
            <>
              <button
                key={btn.id}
                onClick={btnOnclickHandler}
                className={`active-${index}`}
                type="button"
              >
                {btn.text}
              </button>
            </>
          ))}
          <div ref={hourRef} className="secret active-0">
            за 3 часа
          </div>
        </div>
      </aside>
      <aside className="map-container">
        <div className="map-img">
          <img src={selected.src} key={selected.id} alt="hei" />
        </div>
      </aside>
    </section>
  );
}

export default Map;
