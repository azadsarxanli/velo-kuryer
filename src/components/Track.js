import { useEffect, useRef } from "react";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import trackKuryer from "../assets/images/velokuryer-tracking-iphone.png";

function Track() {
  gsap.registerPlugin(ScrollTrigger);
  const refTrack = useRef(null);
  useEffect(() => {
    gsap.from(".img-aside", {
      xPercent: -100,
      duration: 1,
      delay: 0.6,
      opacity: 0,
      scrollTrigger: {
        trigger: refTrack.current,
        markers: true,
        start: "70px bottom",
      },
    });
    gsap.from(".content-aside", {
      xPercent: 100,
      duration: 1,
      delay: 0.6,
      opacity: 0,
      scrollTrigger: {
        trigger: refTrack.current,
        markers: true,
        start: "70px bottom",
      },
    });
  });

  return (
    <section className="tracker" ref={refTrack}>
      <aside className="img-aside">
        <img src={trackKuryer} alt="track-kuryer" />
      </aside>
      <aside className="content-aside">
        <div className="content">
          <h4>Трекер курьера </h4>
          <p>
            Nunc hendrerit cursus molestie interdum nulla nulla. Magna duis quis
            elit, rhoncus amet, eu duis condimentum purus. Eu sit dignissim ut
            ipsum vel scelerisque id ac. Turpis donec dolor vulputate et iaculis
            faucibus. Tempus urna enim maecenas feugiat amet, ultricies sit
            massa. Vestibulum erat.
          </p>
        </div>
      </aside>
    </section>
  );
}

export default Track;
