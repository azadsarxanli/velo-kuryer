import { useEffect, useRef, useState } from "react";
import { gsap, Power3 } from "gsap";
import Btns from "./Btns.json";

function HeaderSection() {
  const onSubmitForm = (event) => {
    event.preventDefault();
  };
  const [toggleKilogram, setToggleKilogram] = useState(Btns.kilogram);
  const [toggleHour, settoggleHour] = useState(Btns.hour);
  const rentRef = useRef();
  const rentAdressRef = useRef();
  useEffect(() => {
    gsap.to("body", 0, { visibility: "visible", ease: Power3 });
    gsap.from(rentRef.current, 1.2, { x: -200, opacity: 0, ease: Power3 });
    gsap.from(rentAdressRef.current, 1.2, { x: 200, opacity: 0, ease: Power3 });
  }, []);
  const toggleKilogramButton = (id) => {
    setToggleKilogram(
      toggleKilogram.filter((item) => {
        item.isActive = false;
        if (item.id === id) {
          item.isActive = !item.isActive;
        }
        return item;
      })
    );
  };
  const toggleHourButton = (id) => {
    settoggleHour(
      toggleHour.filter((item) => {
        item.isActive = false;
        if (item.id === id) {
          item.isActive = !item.isActive;
        }
        return item;
      })
    );
  };

  return (
    <section className="rent-section">
      <aside ref={rentRef} className="rent">
        <div className="rent-container">
          <h4 className="rent-header">
            Экологичная <br /> доставка в Баку
          </h4>
          <p className="rent-description">
            Natoque et ut orci malesuada molestie. Tellus mi dis neque, nisi.
            Sit luctus lacus urna, non scelerisque porta. Turpis diam aliquam
            volutpat faucibus suspendisse.{" "}
          </p>
          <button type="button" className="btn-green">
            Заказать доставку
          </button>
        </div>
      </aside>
      <aside ref={rentAdressRef} className="rent-adress">
        <form onSubmit={onSubmitForm} action="#">
          <h4 className="rent-adress-header">Рассчитайте доставку</h4>
          <div className="input from">
            <i>
              <svg
                width="14"
                height="20"
                viewBox="0 0 14 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 0C3.13 0 0 3.13 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 3.13 10.87 0 7 0ZM7 9.5C5.62 9.5 4.5 8.38 4.5 7C4.5 5.62 5.62 4.5 7 4.5C8.38 4.5 9.5 5.62 9.5 7C9.5 8.38 8.38 9.5 7 9.5Z"
                  fill="#2F2F38"
                />
              </svg>
            </i>
            <input placeholder="Откуда" type="text" name="" id="" />
          </div>
          <div className="input to">
            <i>
              <svg
                width="14"
                height="20"
                viewBox="0 0 14 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 0C3.13 0 0 3.13 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 3.13 10.87 0 7 0ZM7 9.5C5.62 9.5 4.5 8.38 4.5 7C4.5 5.62 5.62 4.5 7 4.5C8.38 4.5 9.5 5.62 9.5 7C9.5 8.38 8.38 9.5 7 9.5Z"
                  fill="#2F2F38"
                />
              </svg>
            </i>
            <input placeholder="Куда" type="text" name="" id="" />
          </div>
          <div className="kilogram-amount">
            {toggleKilogram.map((btn) => (
              <button
                type="button"
                className={btn.isActive ? "active" : null}
                onClick={() => toggleKilogramButton(btn.id)}
                key={btn.id}
              >
                {btn.text}
              </button>
            ))}
          </div>
          <div className="hour">
            {toggleHour.map((btn) => (
              <button
                type="button"
                className={btn.isActive ? "active" : null}
                onClick={() => toggleHourButton(btn.id)}
                key={btn.id}
              >
                {btn.text}
              </button>
            ))}
          </div>
          <button type="submit" className="rent-submit">
            Рассчитать стимость
          </button>
        </form>
      </aside>
    </section>
  );
}

export default HeaderSection;
