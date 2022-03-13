import { useRef, useState, useEffect } from "react";
import mapImage from "../../assets/images/map-first.png";
import iphoneMobile from "../../assets/images/iphoneMobile.png";

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
  const [map, setMap] = useState(true);
  const [map1, setMap1] = useState(false);
  const [map2, setMap2] = useState(false);
  const [map3, setMap3] = useState(false);
  const onClickHandler = (e) => {
    setMap1(true);
    setMap2(false);
    setMap3(false);
    setMap(false);
  };
  const map2Handler = () => {
    setMap1(false);
    setMap3(false);
    setMap(false);

    setMap2(true);
  };
  const map3Handler = () => {
    setMap1(false);
    setMap2(false);
    setMap3(true);
    setMap(false);
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
          <button
            type="button"
            onClick={onClickHandler}
            className={map1 ? "active" : null}
          >
            зона А
          </button>
          <button
            onClick={map2Handler}
            className={map2 ? "active" : null}
            type="button"
          >
            зона Б
          </button>
          <button
            onClick={map3Handler}
            className={map3 ? "active" : null}
            type="button"
          >
            зона C
          </button>
        </div>
        <div className="hour">
          <button type="button">за 3 часа</button>
          <button type="button">за 24 часа</button>
          <button type="button">за 48 часа</button>
        </div>
      </aside>
      <aside className="map-container">
        <div className="map-img">
          {map && <img src={mapImage} alt="" />}
          {map1 && <img src={mapImage} alt="" />}
          {map2 && <img src={mapImage} alt="" />}
          {map3 && <img src={mapImage} alt="" />}
        </div>
      </aside>
    </section>
  );
}

export default Map;
