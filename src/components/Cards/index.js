import { useEffect, useRef, useState } from "react";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Cards.scss";
import CardsApi from "./Cards.json";

function Cards() {
  gsap.registerPlugin(ScrollTrigger);
  const cardRef = useRef(null);
  useEffect(() => {
    gsap.from(".card-container .card", 1, {
      opacity: 0,
      y: 35,
      stagger: 0.25,
      delay: 0.6,
      ease: Power3,
      scrollTrigger: {
        trigger: cardRef.current,
      },
    });
  }, []);
  const [cards, setCards] = useState(CardsApi.card);
  const toggleHeader = (id) => {
    setCards(
      cards.filter((card) => {
        if (card.id === id) {
          card.isActive = !card.isActive;
          console.log(card.isActive);
        }
        return card;
      })
    );
  };
  return (
    <section className="container" ref={cardRef}>
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
      <div className="card-mobile">
        <div className="cards">
          {cards.map((card) => (
            <div
              key={card.id}
              className={card.isActive ? "card active" : "card"}
            >
              <div
                className="card-header"
                onClick={() => toggleHeader(card.id)}
              >
                <h4>{card.h4}</h4>
                <i className={card.isActive ? "active" : null}>
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
                  card.isActive ? "card-detail active " : "card-detail"
                }
              >
                <p> {card.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cards;
