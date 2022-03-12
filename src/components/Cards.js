import { useEffect, useRef } from "react";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Cards() {
  gsap.registerPlugin(ScrollTrigger);
  const cardRef = useRef(null);
  useEffect(() => {
    gsap.from(".card", 1, {
      opacity: 0,
      y: -25,
      stagger: 0.25,
      delay: 0.6,
      ease: Power3,
      scrollTrigger: {
        trigger: cardRef.current,
      },
    });
  }, []);
  return (
    <section className="cards" ref={cardRef}>
      <h4 className="cards-header">Виды доставок</h4>
      <div className="card-container">
        <div className="card">
          <h4 className="card-header">Доставка за 3 часа</h4>
          <p>
            Interdum mattis pharetra sagittis dolor et congue. Sollicitudin
            nulla sed viverra diam tincidunt.
          </p>
        </div>
        <div className="card">
          <h4 className="card-header">Доставка за 3 часа</h4>
          <p>
            Interdum mattis pharetra sagittis dolor et congue. Sollicitudin
            nulla sed viverra diam tincidunt.
          </p>
        </div>
        <div className="card">
          <h4 className="card-header">Доставка за 3 часа</h4>
          <p>
            Interdum mattis pharetra sagittis dolor et congue. Sollicitudin
            nulla sed viverra diam tincidunt.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Cards;
