import { useRef, useEffect } from "react";
import mapImage from "../assets/images/map-first.png";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

  return (
    <section className="map-section" ref={mapRef}>
      <aside className="map-config">
        <h4>Зоны доставки</h4>
        <p>
          Venenatis convallis tempus, mi posuere accumsan, enim elit vitae,
          cras. Enim nibh morbi cras eu libero.
        </p>
        <div className="locations">
          <button type="button" className="active">
            зона А
          </button>
          <button type="button">зона Б</button>
          <button type="button">зона C</button>
        </div>
        <div className="hour">
          <button type="button">за 3 часа</button>
          <button type="button">за 24 часа</button>
          <button type="button">за 48 часа</button>
        </div>
      </aside>
      <aside className="map-container">
        <div className="map-img">
          <img src={mapImage} alt="" />
        </div>
      </aside>
    </section>
  );
}

export default Map;
